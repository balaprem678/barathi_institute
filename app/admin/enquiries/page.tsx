'use client';

import { useState, useEffect } from 'react';
import { AuthService } from '@/services/authService';
import { Search, Mail, Phone, Calendar, Eye, MapPin, Briefcase, GraduationCap, X } from 'lucide-react';

interface Enquiry {
    _id: string;
    name: string;
    email: string;
    phone: string;
    alternatePhone?: string;
    city?: string;
    qualification?: string;
    yearOfPassing?: string;
    course?: string;
    occupation?: string;
    message?: string;
    createdAt: string;
}

export default function EnquiriesPage() {
    const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalEntries, setTotalEntries] = useState(0);
    const [selectedEnquiry, setSelectedEnquiry] = useState<Enquiry | null>(null);

    const fetchEnquiries = async (page = 1, search = '') => {
        try {
            setLoading(true);
            const res = await AuthService.fetchAuth(`/api/enquiries?page=${page}&limit=10&search=${encodeURIComponent(search)}`);
            if (res.ok) {
                const data = await res.json();
                if (data.data) {
                    setEnquiries(data.data);
                    setTotalPages(data.totalPages);
                    setCurrentPage(data.currentPage);
                    setTotalEntries(data.totalEntries);
                } else {
                    setEnquiries(data);
                }
            } else {
                const errorData = await res.json().catch(() => ({}));
                console.error('Failed to fetch enquiries:', res.status, res.statusText, errorData);
            }
        } catch (error) {
            console.error('Error fetching enquiries:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchEnquiries(currentPage, searchTerm);
        }, 500);
        return () => clearTimeout(timer);
    }, [currentPage, searchTerm]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

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
                        placeholder="Search enquiries by name, email, phone or course..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
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
                                    Name & Course
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Contact
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    City
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {enquiries.length > 0 ? (
                                enquiries.map((enquiry) => (
                                    <tr key={enquiry._id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                                                {new Date(enquiry.createdAt).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-medium text-gray-900">{enquiry.name}</div>
                                            <div className="text-xs text-blue-600 bg-blue-50 inline-block px-2 py-0.5 rounded mt-1">
                                                {enquiry.course || 'N/A'}
                                            </div>
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
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                                                {enquiry.city || '-'}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => setSelectedEnquiry(enquiry)}
                                                className="text-blue-600 hover:text-blue-900 flex items-center justify-end w-full"
                                            >
                                                <Eye className="w-4 h-4 mr-1" /> View
                                            </button>
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

                    {/* Pagination UI */}
                    {!loading && totalPages > 1 && (
                        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                <div>
                                    <p className="text-sm text-gray-700">
                                        Showing page <span className="font-medium">{currentPage}</span> of <span className="font-medium">{totalPages}</span>
                                        {' '}(<span className="font-medium">{totalEntries}</span> total entries)
                                    </p>
                                </div>
                                <div>
                                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                        <button
                                            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                            disabled={currentPage === 1}
                                            className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'}`}
                                        >
                                            Previous
                                        </button>
                                        {[...Array(totalPages)].map((_, idx) => (
                                            <button
                                                key={idx + 1}
                                                onClick={() => setCurrentPage(idx + 1)}
                                                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === idx + 1 ? 'z-10 bg-blue-50 border-blue-500 text-blue-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'}`}
                                            >
                                                {idx + 1}
                                            </button>
                                        ))}
                                        <button
                                            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                            disabled={currentPage === totalPages}
                                            className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-50'}`}
                                        >
                                            Next
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Details Modal */}
            {selectedEnquiry && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h2 className="text-xl font-semibold text-gray-800">Enquiry Details</h2>
                            <button
                                onClick={() => setSelectedEnquiry(null)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Full Name</label>
                                    <p className="text-gray-900 font-medium">{selectedEnquiry.name}</p>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Course Interested In</label>
                                    <p className="text-blue-700 bg-blue-50 inline-block px-2 py-1 rounded text-sm font-medium mt-1">
                                        {selectedEnquiry.course || 'N/A'}
                                    </p>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Email Address</label>
                                    <div className="flex items-center mt-1">
                                        <Mail className="w-4 h-4 mr-2 text-gray-400" />
                                        <a href={`mailto:${selectedEnquiry.email}`} className="text-blue-600 hover:underline">
                                            {selectedEnquiry.email}
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Primary Phone</label>
                                    <div className="flex items-center mt-1">
                                        <Phone className="w-4 h-4 mr-2 text-gray-400" />
                                        <a href={`tel:${selectedEnquiry.phone}`} className="text-blue-600 hover:underline">
                                            {selectedEnquiry.phone}
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Alternate / WhatsApp Number</label>
                                    <div className="flex items-center mt-1">
                                        <Phone className="w-4 h-4 mr-2 text-gray-400" />
                                        <p className="text-gray-900">{selectedEnquiry.alternatePhone || 'N/A'}</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Location / City</label>
                                    <div className="flex items-center mt-1">
                                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                                        <p className="text-gray-900">{selectedEnquiry.city || 'N/A'}</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Qualification</label>
                                    <div className="flex items-center mt-1">
                                        <GraduationCap className="w-4 h-4 mr-2 text-gray-400" />
                                        <p className="text-gray-900">{selectedEnquiry.qualification || 'N/A'}</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Year of Passing</label>
                                    <div className="flex items-center mt-1">
                                        <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                                        <p className="text-gray-900">{selectedEnquiry.yearOfPassing || 'N/A'}</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Occupation</label>
                                    <div className="flex items-center mt-1">
                                        <Briefcase className="w-4 h-4 mr-2 text-gray-400" />
                                        <p className="text-gray-900">{selectedEnquiry.occupation || 'N/A'}</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Date Submitted</label>
                                    <p className="text-gray-900 mt-1">{new Date(selectedEnquiry.createdAt).toLocaleString()}</p>
                                </div>
                            </div>

                            {selectedEnquiry.message && (
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Message</label>
                                    <p className="text-gray-700 mt-2 bg-gray-50 p-3 rounded-lg text-sm">{selectedEnquiry.message}</p>
                                </div>
                            )}

                            <div className="flex justify-end pt-4">
                                <button
                                    onClick={() => setSelectedEnquiry(null)}
                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
