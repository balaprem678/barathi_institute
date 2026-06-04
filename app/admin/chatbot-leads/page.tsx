'use client';

import { useState, useEffect } from 'react';
import { AuthService } from '@/services/authService';
import { Search, Phone, Calendar, Eye, X, BookOpen, MapPin, GraduationCap } from 'lucide-react';

interface ChatbotLead {
    _id: string;
    name: string;
    phone: string;
    qualification?: string;
    courseType?: string;
    course?: string;
    branch?: string;
    createdAt: string;
}

export default function ChatbotLeadsPage() {
    const [leads, setLeads] = useState<ChatbotLead[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLead, setSelectedLead] = useState<ChatbotLead | null>(null);

    const fetchLeads = async () => {
        try {
            setLoading(true);
            const res = await AuthService.fetchAuth('/api/chatbot-leads');
            if (res.ok) {
                const data = await res.json();
                setLeads(data);
            } else {
                console.error('Failed to fetch chatbot leads:', res.status);
            }
        } catch (error) {
            console.error('Error fetching chatbot leads:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    const filteredLeads = leads.filter(lead => 
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.phone.includes(searchTerm) ||
        (lead.course && lead.course.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    if (loading) {
        return <div className="p-8 text-center text-gray-500">Loading Chatbot leads...</div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-900">Chatbot Leads</h1>

                <div className="relative w-full sm:w-64">
                    <input
                        type="text"
                        placeholder="Search leads by name, phone..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
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
                                    Name
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Contact
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Course & Branch
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredLeads.length > 0 ? (
                                filteredLeads.map((lead) => (
                                    <tr key={lead._id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <div className="flex items-center">
                                                <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                                                {new Date(lead.createdAt).toLocaleDateString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                                            <div className="text-xs text-blue-600 bg-blue-50 inline-block px-2 py-0.5 rounded mt-1">
                                                {lead.qualification || 'N/A'}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center text-sm text-gray-500">
                                                <Phone className="w-4 h-4 mr-2" />
                                                {lead.phone}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <div className="flex flex-col space-y-1">
                                                <span className="font-medium text-gray-800">{lead.course || 'N/A'}</span>
                                                <span className="text-xs text-gray-500">{lead.branch || 'N/A'}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => setSelectedLead(lead)}
                                                className="text-blue-600 hover:text-blue-900 flex items-center justify-end w-full"
                                            >
                                                <Eye className="w-4 h-4 mr-1" /> View
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                        No Chatbot leads found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Details Modal */}
            {selectedLead && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h2 className="text-xl font-semibold text-gray-800">Lead Details</h2>
                            <button
                                onClick={() => setSelectedLead(null)}
                                className="text-gray-400 hover:text-gray-600"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        <div className="p-6 space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Name</label>
                                    <p className="text-gray-900 font-medium">{selectedLead.name}</p>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Phone</label>
                                    <div className="flex items-center mt-1">
                                        <Phone className="w-4 h-4 mr-2 text-gray-400" />
                                        <a href={`tel:${selectedLead.phone}`} className="text-blue-600 hover:underline">
                                            {selectedLead.phone}
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Qualification</label>
                                    <div className="flex items-center mt-1">
                                        <GraduationCap className="w-4 h-4 mr-2 text-gray-400" />
                                        <p className="text-gray-900">{selectedLead.qualification || 'N/A'}</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Course Type</label>
                                    <div className="flex items-center mt-1">
                                        <BookOpen className="w-4 h-4 mr-2 text-gray-400" />
                                        <p className="text-gray-900">{selectedLead.courseType || 'N/A'}</p>
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Specific Course</label>
                                    <p className="text-blue-700 bg-blue-50 inline-block px-3 py-2 rounded font-medium mt-1 w-full">
                                        {selectedLead.course || 'N/A'}
                                    </p>
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Branch Location</label>
                                    <div className="flex items-center mt-1 bg-gray-50 px-3 py-2 rounded">
                                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                                        <p className="text-gray-900">{selectedLead.branch || 'N/A'}</p>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-xs font-semibold text-gray-500 uppercase">Date Submitted</label>
                                    <p className="text-gray-900 mt-1">{new Date(selectedLead.createdAt).toLocaleString()}</p>
                                </div>
                            </div>
                            <div className="flex justify-end pt-4 border-t border-gray-100">
                                <button
                                    onClick={() => setSelectedLead(null)}
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
