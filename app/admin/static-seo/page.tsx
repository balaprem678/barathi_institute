'use client';

import React, { useState, useEffect } from 'react';
import { Globe, Plus, Search, Edit2, Trash2, ExternalLink, RefreshCw } from 'lucide-react';
import StaticSEOModal from '@/components/admin/StaticSEOModal';
import { useNotification } from '@/context/NotificationContext';
import { AuthService } from '@/services/authService';


interface StaticSEOData {
    _id: string;
    pagePath: string;
    pageName: string;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    altText: string;
    schemaScript: string;
    updatedAt: string;
}

export default function StaticSEOManagement() {
    const [seoList, setSeoList] = useState<StaticSEOData[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedSEO, setSelectedSEO] = useState<StaticSEOData | null>(null);
    const { showNotification } = useNotification();


    const fetchSEOData = async () => {
        setIsLoading(true);
        try {
            const response = await AuthService.fetchAuth('/api/static-seo');
            if (!response.ok) throw new Error('Failed to fetch SEO data');
            const data = await response.json();
            setSeoList(data);
        } catch (error) {
            showNotification('error', 'Error fetching SEO data');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchSEOData();
    }, []);

    const handleDelete = async (id: string, name: string) => {
        if (window.confirm(`Are you sure you want to delete SEO data for ${name}?`)) {
            try {
                const response = await AuthService.fetchAuth(`/api/static-seo/${id}`, {
                    method: 'DELETE'
                });

                if (!response.ok) throw new Error('Failed to delete SEO data');

                showNotification('success', 'SEO data deleted successfully');
                fetchSEOData();
            } catch (error) {
                showNotification('error', 'Error deleting SEO data');
            }
        }
    };


    const filteredList = seoList.filter(item => 
        item.pageName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.pagePath.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight flex items-center">
                            <Globe className="w-8 h-8 mr-3 text-indigo-600" />
                            Static Page SEO
                        </h1>
                        <p className="mt-2 text-gray-500 font-medium">Manage metadata and schema for core static pages</p>
                    </div>
                    <button
                        onClick={() => {
                            setSelectedSEO(null);
                            setIsModalOpen(true);
                        }}
                        className="flex items-center justify-center px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-100 group"
                    >
                        <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform" />
                        Add New Page
                    </button>
                </div>

                {/* Search and Stats Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="md:col-span-3 relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 group-focus-within:text-indigo-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="Search by page name or path..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:ring-4 focus:ring-indigo-50 transition-all outline-none font-medium shadow-sm"
                        />
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-2xl border border-indigo-100 flex items-center justify-between">
                        <div>
                            <p className="text-indigo-600 text-sm font-bold uppercase tracking-wider">Total Pages</p>
                            <p className="text-3xl font-black text-indigo-900">{seoList.length}</p>
                        </div>
                        <Globe className="w-10 h-10 text-indigo-200" />
                    </div>
                </div>

                {/* Table Section */}
                <div className="bg-white rounded-3xl shadow-xl shadow-gray-100 overflow-hidden border border-gray-100">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-gray-50/50">
                                    <th className="px-6 py-5 text-sm font-bold text-gray-600 uppercase tracking-wider">Page Details</th>
                                    <th className="px-6 py-5 text-sm font-bold text-gray-600 uppercase tracking-wider">SEO Status</th>
                                    <th className="px-6 py-5 text-sm font-bold text-gray-600 uppercase tracking-wider">Last Updated</th>
                                    <th className="px-6 py-5 text-sm font-bold text-gray-600 uppercase tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {isLoading ? (
                                    Array(3).fill(0).map((_, i) => (
                                        <tr key={i} className="animate-pulse">
                                            <td colSpan={4} className="px-6 py-8">
                                                <div className="h-12 bg-gray-100 rounded-xl w-full"></div>
                                            </td>
                                        </tr>
                                    ))
                                ) : filteredList.length > 0 ? (
                                    filteredList.map((item) => (
                                        <tr key={item._id} className="hover:bg-gray-50/80 transition-colors">
                                            <td className="px-6 py-5">
                                                <div className="flex flex-col">
                                                    <span className="font-bold text-gray-900 text-lg">{item.pageName}</span>
                                                    <span className="text-sm font-mono text-indigo-500 flex items-center mt-1">
                                                        {item.pagePath}
                                                        <a href={item.pagePath} target="_blank" rel="noopener noreferrer" className="ml-2 hover:text-indigo-700">
                                                            <ExternalLink className="w-3 h-3" />
                                                        </a>
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex gap-2">
                                                    {item.metaTitle ? (
                                                        <span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full border border-green-100">SEO Ready</span>
                                                    ) : (
                                                        <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold rounded-full border border-amber-100">Missing Title</span>
                                                    )}
                                                    {item.schemaScript && (
                                                        <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full border border-blue-100">JSON-LD</span>
                                                    )}
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-sm font-medium text-gray-500 uppercase tracking-tight">
                                                {new Date(item.updatedAt).toLocaleDateString()}
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button
                                                        onClick={() => {
                                                            setSelectedSEO(item);
                                                            setIsModalOpen(true);
                                                        }}
                                                        className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                                        title="Edit SEO"
                                                    >
                                                        <Edit2 className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(item._id, item.pageName)}
                                                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                        title="Delete"
                                                    >
                                                        <Trash2 className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-20 text-center">
                                            <div className="flex flex-col items-center">
                                                <Globe className="w-16 h-16 text-gray-200 mb-4" />
                                                <p className="text-gray-400 font-bold text-xl">No SEO pages found</p>
                                                <p className="text-gray-400 text-sm mt-1">Start by adding your first static page metadata</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <StaticSEOModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={fetchSEOData}
                initialData={selectedSEO}
                existingPaths={seoList.map(item => item.pagePath)}
            />
        </>
    );
}


