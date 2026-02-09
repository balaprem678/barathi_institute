'use client';
import { useState, useEffect } from 'react';
import { Plus, Search, Edit2, Trash2, ExternalLink, RefreshCw } from 'lucide-react';
import { AuthService } from '@/services/authService';
import LandingPageModal, { LandingPageData } from '@/components/admin/LandingPageModal';
import Link from 'next/link';

export default function LandingPages() {
    const [pages, setPages] = useState<LandingPageData[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEditingPage, setCurrentEditingPage] = useState<LandingPageData | null>(null);

    const fetchPages = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/landing-pages'); // Public GET allowed, or use AuthService if restricted
            if (res.ok) {
                const data = await res.json();
                setPages(data);
            }
        } catch (error) {
            console.error('Error fetching pages:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPages();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this page?')) return;

        try {
            const res = await AuthService.fetchAuth(`/api/landing-pages/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                fetchPages();
            } else {
                alert('Failed to delete page');
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSave = async (data: LandingPageData) => {
        try {
            const url = data._id ? `/api/landing-pages/${data._id}` : '/api/landing-pages';
            const method = data._id ? 'PUT' : 'POST';

            const res = await AuthService.fetchAuth(url, {
                method,
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.message || 'Failed to save');
            }

            fetchPages();
        } catch (error) {
            console.error(error);
            alert('Error saving page');
            throw error; // Re-throw to handle in modal
        }
    };

    const filteredPages = pages.filter(page =>
        page.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
        page.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-800">SEO Landing Pages</h1>
                <button
                    onClick={() => {
                        setCurrentEditingPage(null);
                        setIsModalOpen(true);
                    }}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    Create New Page
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                {/* Search Bar */}
                <div className="p-4 border-b border-gray-100">
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search by slug or city..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">URL Slug</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">City</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Template</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">Loading...</td>
                                </tr>
                            ) : filteredPages.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">No pages found. Create one to get started.</td>
                                </tr>
                            ) : (
                                filteredPages.map((page) => (
                                    <tr key={page._id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            <div className="flex items-center">
                                                <span className="truncate max-w-xs block font-medium p-1 bg-gray-100 rounded text-gray-700">/{page.slug}</span>
                                                <Link href={`/${page.slug}`} target="_blank" className="ml-2 text-blue-400 hover:text-blue-600">
                                                    <ExternalLink className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{page.city}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${page.courseType === 'hotel-management'
                                                    ? 'bg-purple-100 text-purple-800'
                                                    : 'bg-green-100 text-green-800'
                                                }`}>
                                                {page.courseType === 'hotel-management' ? 'Hotel Mgmt' : 'Paramedical'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${page.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                                {page.isActive ? 'Active' : 'Draft'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => {
                                                    setCurrentEditingPage(page);
                                                    setIsModalOpen(true);
                                                }}
                                                className="text-blue-600 hover:text-blue-900 mr-4"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => page._id && handleDelete(page._id)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            <LandingPageModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                initialData={currentEditingPage}
            />
        </div>
    );
}
