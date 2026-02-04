'use client';
import { useState, useEffect } from 'react';

interface Student {
    _id: string;
    name: string;
    email: string;
    phone: string;
    course: string;
    createdAt: string;
    markSheetPath?: string;
}

export default function StudentsPage() {
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudents = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                window.location.href = '/admin/login';
                return;
            }

            try {
                const res = await fetch('/api/students', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (res.ok) {
                    const data = await res.json();
                    setStudents(data);
                }
            } catch (error) {
                console.error('Error fetching students:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchStudents();
    }, []);

    if (loading) return <div className="p-8 text-center text-gray-500">Loading students...</div>;

    return (
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
            <h4 className="mb-6 text-xl font-bold text-black font-sans">
                Student Registrations
            </h4>

            <div className="flex flex-col">
                <div className="grid grid-cols-3 rounded-sm bg-gray-200 sm:grid-cols-5 p-2.5 text-center">
                    <div className="p-2.5 xl:p-5 uppercase text-sm font-bold text-gray-600 font-sans">Name</div>
                    <div className="p-2.5 xl:p-5 uppercase text-sm font-bold text-gray-600 font-sans">Email</div>
                    <div className="p-2.5 xl:p-5 uppercase text-sm font-bold text-gray-600 font-sans">Phone</div>
                    <div className="p-2.5 xl:p-5 uppercase text-sm font-bold text-gray-600 font-sans">Course</div>
                    <div className="hidden p-2.5 xl:p-5 sm:block uppercase text-sm font-bold text-gray-600 font-sans">Actions</div>
                </div>

                {students.length > 0 ? (
                    students.map((student) => (
                        <div key={student._id} className="grid grid-cols-3 sm:grid-cols-5 border-b border-stroke text-center items-center py-2 hover:bg-gray-50 transition-colors">
                            <div className="p-2.5 xl:p-5 text-black font-medium text-sm font-sans">{student.name}</div>
                            <div className="p-2.5 xl:p-5 text-black text-sm font-sans truncate" title={student.email}>{student.email}</div>
                            <div className="p-2.5 xl:p-5 text-black text-sm font-sans">{student.phone}</div>
                            <div className="p-2.5 xl:p-5 text-black text-sm font-sans">{student.course}</div>
                            <div className="hidden p-2.5 xl:p-5 sm:block">
                                <a
                                    href={student.markSheetPath || '#'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center justify-center rounded px-3 py-1 text-sm font-medium text-white hover:bg-opacity-90 ${student.markSheetPath ? 'bg-blue-500' : 'bg-gray-400 cursor-not-allowed'}`}
                                >
                                    View Marksheet
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="p-10 text-center text-gray-500 font-sans">
                        No students found.
                    </div>
                )}
            </div>
        </div>
    );
}
