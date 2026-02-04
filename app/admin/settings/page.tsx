'use client';
import { useState, useEffect } from 'react';

export default function Settings() {
    const [formData, setFormData] = useState({
        smtpHost: '',
        smtpPort: '587',
        smtpUser: '',
        smtpPass: '',
        recipientEmails: ''
    });
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const token = localStorage.getItem('token');
            const res = await fetch('/api/settings', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (res.ok) {
                const data = await res.json();
                if (data) {
                    setFormData({
                        smtpHost: data.smtpHost || '',
                        smtpPort: data.smtpPort || '587',
                        smtpUser: data.smtpUser || '',
                        smtpPass: data.smtpPass || '',
                        recipientEmails: data.recipientEmails || ''
                    });
                }
            }
        } catch (error) {
            console.error('Error fetching settings:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');
        try {
            const token = localStorage.getItem('token');
            const res = await fetch('/api/settings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setMessage('Settings updated successfully!');
            } else {
                setMessage('Failed to update settings.');
            }
        } catch (error) {
            console.error('Error updating settings:', error);
            setMessage('Error updating settings.');
        }
    };

    if (loading) return <div className="p-8">Loading...</div>;

    return (
        <div className="rounded-sm border border-stroke bg-white shadow-default">
            <div className="border-b border-stroke py-4 px-6.5">
                <h3 className="font-medium text-black">
                    Email Settings (SMTP)
                </h3>
            </div>

            <form onSubmit={handleSubmit} className="p-6.5">
                {message && (
                    <div className={`p-4 mb-4 rounded ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {message}
                    </div>
                )}

                <div className="mb-4.5">
                    <label className="mb-2.5 block text-black font-medium">
                        SMTP Host <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        name="smtpHost"
                        value={formData.smtpHost}
                        onChange={handleChange}
                        placeholder="smtp.gmail.com"
                        className="w-full rounded border border-gray-300 bg-white py-3 px-5 text-black outline-none transition focus:border-blue-500 active:border-blue-500 disabled:cursor-default disabled:bg-gray-100"
                    />
                </div>

                <div className="mb-4.5">
                    <label className="mb-2.5 block text-black font-medium">
                        SMTP Port
                    </label>
                    <input
                        type="text"
                        name="smtpPort"
                        value={formData.smtpPort}
                        onChange={handleChange}
                        placeholder="587"
                        className="w-full rounded border border-gray-300 bg-white py-3 px-5 text-black outline-none transition focus:border-blue-500 active:border-blue-500 disabled:cursor-default disabled:bg-gray-100"
                    />
                </div>

                <div className="mb-4.5">
                    <label className="mb-2.5 block text-black font-medium">
                        SMTP User (Email)
                    </label>
                    <input
                        type="email"
                        name="smtpUser"
                        value={formData.smtpUser}
                        onChange={handleChange}
                        placeholder="your-email@gmail.com"
                        className="w-full rounded border border-gray-300 bg-white py-3 px-5 text-black outline-none transition focus:border-blue-500 active:border-blue-500 disabled:cursor-default disabled:bg-gray-100"
                    />
                </div>

                <div className="mb-4.5">
                    <label className="mb-2.5 block text-black font-medium">
                        SMTP Password <span className="text-gray-500 text-sm font-normal">(App Password)</span>
                    </label>
                    <input
                        type="password"
                        name="smtpPass"
                        value={formData.smtpPass}
                        onChange={handleChange}
                        placeholder="****"
                        className="w-full rounded border border-gray-300 bg-white py-3 px-5 text-black outline-none transition focus:border-blue-500 active:border-blue-500 disabled:cursor-default disabled:bg-gray-100"
                    />
                </div>

                <div className="mb-6">
                    <label className="mb-2.5 block text-black font-medium">
                        Recipient Emails <span className="text-gray-500 text-sm font-normal">(Comma separated)</span>
                    </label>
                    <textarea
                        rows={3}
                        name="recipientEmails"
                        value={formData.recipientEmails}
                        onChange={handleChange}
                        placeholder="admin1@example.com, admin2@example.com"
                        className="w-full rounded border border-gray-300 bg-white py-3 px-5 text-black outline-none transition focus:border-blue-500 active:border-blue-500 disabled:cursor-default disabled:bg-gray-100"
                    ></textarea>
                </div>

                <div className="flex justify-end gap-4.5">
                    <button
                        className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90 bg-blue-600 text-white"
                        type="submit"
                    >
                        Save Settings
                    </button>
                </div>
            </form>
        </div>
    );
}
