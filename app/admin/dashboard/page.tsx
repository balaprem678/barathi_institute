'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Student {
    _id: string;
    name: string;
    email: string;
    phone: string;
    course: string;
    createdAt: string;
    markSheetPath?: string;
}

export default function AdminDashboard() {
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
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (res.ok) {
                    const data = await res.json();
                    setStudents(data);
                } else {
                    // If unauthorized, redirect
                    if (res.status === 401 || res.status === 403) {
                        localStorage.removeItem('token');
                        router.push('/admin/login');
                    }
                }
            } catch (error) {
                console.error(error);
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
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2>Admin Dashboard</h2>
                        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                    </div>

                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Course</th>
                                    <th>Date</th>
                                    <th>Mark Sheet</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map(student => (
                                    <tr key={student._id}>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>
                                        <td>{student.phone}</td>
                                        <td>{student.course}</td>
                                        <td>{new Date(student.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            {student.markSheetPath ? (
                                                <a href={student.markSheetPath} target="_blank" rel="noopener noreferrer">View Mark Sheet</a>
                                            ) : (
                                                <span className="text-muted">Not Uploaded</span>
                                            )}
                                        </td>
                                        <td>
                                            <Link href={`/admin/upload/${student._id}`} className="btn btn-sm btn-primary">
                                                Upload Mark Sheet
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                                {students.length === 0 && (
                                    <tr>
                                        <td colSpan={7} className="text-center">No registrations found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
