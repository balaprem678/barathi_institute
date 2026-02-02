'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Student {
    _id: string;
    name: string;
    email: string;
    phone: string;
    course: string;
    createdAt: string;
}

export default function Dashboard() {
    const router = useRouter();
    const [students, setStudents] = useState<Student[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/admin/login');
            return;
        }

        const fetchStudents = async () => {
            try {
                const res = await fetch('/api/students', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (res.ok) {
                    const data = await res.json();
                    setStudents(data);
                } else {
                    if (res.status === 401 || res.status === 403) {
                        localStorage.removeItem('token');
                        router.push('/admin/login');
                    }
                }
            } catch (error) {
                console.error('Failed to fetch students', error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/admin/login');
    };

    if (loading) return <div className="text-center mt-5">Loading...</div>;

    return (
        <div className="container" style={{ marginTop: '50px', marginBottom: '100px', minHeight: '600px' }}>
            <div className="row">
                <div className="col-md-12">
                    <div className="section-title text-center">
                        <h3 style={{ marginBottom: '20px' }}>Admin Dashboard</h3>
                        <div className="text-right mb-3" style={{ marginBottom: '20px' }}>
                            <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                        </div>
                    </div>

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4>Admission Enquiries</h4>
                        </div>
                        <div className="panel-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Course</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students.length > 0 ? (
                                            students.map((student, index) => (
                                                <tr key={student._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{student.name}</td>
                                                    <td>{student.email}</td>
                                                    <td>{student.phone}</td>
                                                    <td>{student.course}</td>
                                                    <td>{new Date(student.createdAt).toLocaleDateString()}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={6} className="text-center">No students found</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
