'use client';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function UploadMarkSheet() {
    const router = useRouter();
    const params = useParams();
    const { id } = params;

    const [file, setFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    // Verify auth on mount
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) router.push('/admin/login');
    }, [router]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!file) {
            setMessage('Please select a file');
            return;
        }

        setLoading(true);
        const formData = new FormData();
        formData.append('markSheet', file);

        try {
            const token = localStorage.getItem('token');
            const res = await fetch(`/api/students/${id}/upload-marks`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: formData
            });

            const data = await res.json();
            if (res.ok) {
                setMessage('Upload successful!');
                setTimeout(() => router.push('/admin/dashboard'), 1500);
            } else {
                setMessage(data.message || 'Upload failed');
            }
        } catch (error) {
            setMessage('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5 mb-5" style={{ minHeight: '400px' }}>
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h4>Upload Mark Sheet</h4>
                        </div>
                        <div className="panel-body">
                            {message && <div className={`alert ${message.includes('successful') ? 'alert-success' : 'alert-danger'}`}>{message}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Select Mark Sheet (PDF/Image)</label>
                                    <input type="file" onChange={handleFileChange} className="form-control" accept="image/*,.pdf" />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
                                    {loading ? 'Uploading...' : 'Upload'}
                                </button>
                                <button type="button" className="btn btn-default btn-block" onClick={() => router.back()}>
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
