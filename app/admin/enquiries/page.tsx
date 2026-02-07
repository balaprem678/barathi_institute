'use client';

import { useState, useEffect } from 'react';
import { AuthService } from '@/services/authService';
import { Search, Mail, Phone, Calendar } from 'lucide-react';

interface Enquiry {
    _id: string;
    name: string;
    email: string;
    phone: string;
    createdAt: string;
}

export default function EnquiriesPage() {
    const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchEnquiries = async () => {
            try {
                const res = await AuthService.fetchAuth('/api/enquiries');
                if (res.ok) {
                    const data = await res.json();
                    setEnquiries(data);
                } else {
                    console.error('Failed to fetch enquiries');
                }
            } catch (error) {
                console.error('Error fetching enquiries:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchEnquiries();
    }, []);

    const filteredEnquiries = enquiries.filter(enquiry =>
        enquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        enquiry.phone.includes(searchTerm)
    );

    if (loading) {
        return <div className="p-8 text-center text-gray-500">Loading enquiries...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Enquiries</h1>

                <div className="relative w-full sm:w-64">
                    <input
                        type="text"
                        placeholder="Search enquiries..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Date
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Contact Info
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredEnquiries.length > 0 ? (
                                filteredEnquiries.map((enquiry) => (
                                    <tr key={enquiry._id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                                                {new Date(enquiry.createdAt).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{enquiry.name}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex flex-col space-y-1">
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <Mail className="w-4 h-4 mr-2" />
                                                    {enquiry.email}
                                                </div>
                                                <div className="flex items-center text-sm text-gray-500">
                                                    <Phone className="w-4 h-4 mr-2" />
                                                    {enquiry.phone}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="px-6 py-8 text-center text-gray-500">
                                        No enquiries found matching your search.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
