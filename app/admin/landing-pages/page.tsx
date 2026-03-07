'use client';
import { useState, useEffect } from 'react';
import { Plus, Search, Edit2, Trash2, ExternalLink, RefreshCw, Loader2 } from 'lucide-react';
import { AuthService } from '@/services/authService';
import LandingPageModal, { LandingPageData } from '@/components/admin/LandingPageModal';
import Link from 'next/link';
import { useNotification } from '@/context/NotificationContext';

export default function LandingPages() {
    const { showNotification } = useNotification();
    const [pages, setPages] = useState<LandingPageData[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalEntries, setTotalEntries] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEditingPage, setCurrentEditingPage] = useState<LandingPageData | null>(null);
    const [editingId, setEditingId] = useState<string | null>(null);

    const fetchPages = async (page = 1, search = '') => {
        try {
            setLoading(true);
            const res = await fetch(`/api/landing-pages?page=${page}&limit=10&search=${encodeURIComponent(search)}`);
            if (res.ok) {
                const data = await res.json();
                if (data.data) {
                    setPages(data.data);
                    setTotalPages(data.totalPages);
                    setCurrentPage(data.currentPage);
                    setTotalEntries(data.totalEntries);
                } else {
                    setPages(data); // Fallback if API hasn't updated yet
                }
            }
        } catch (error) {
            console.error('Error fetching pages:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            fetchPages(currentPage, searchTerm);
        }, 500); // Debounce search
        return () => clearTimeout(timer);
    }, [currentPage, searchTerm]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to page 1 on new search
    };

    const handleEditClick = async (id: string) => {
        try {
            setEditingId(id);
            const res = await fetch(`/api/landing-pages/${id}`);
            if (res.ok) {
                const fullPage = await res.json();
                setCurrentEditingPage(fullPage);
                setIsModalOpen(true);
            } else {
                showNotification('error', 'Failed to load page details');
            }
        } catch (error) {
            console.error(error);
            showNotification('error', 'An error occurred while loading');
        } finally {
            setEditingId(null);
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this page?')) return;

        try {
            const res = await AuthService.fetchAuth(`/api/landing-pages/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                fetchPages();
                showNotification('success', 'Page deleted successfully');
            } else {
                showNotification('error', 'Failed to delete page');
            }
        } catch (error) {
            console.error(error);
            showNotification('error', 'An error occurred while deleting');
        }
    };

    const handleSave = async (data: FormData) => {
        try {
            const id = data.get('_id');
            const url = id ? `/api/landing-pages/${id}` : '/api/landing-pages';
            const method = id ? 'PUT' : 'POST';

            const res = await AuthService.fetchAuth(url, {
                method,
                body: data,
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.message || 'Failed to save');
            }

            fetchPages();
            showNotification('success', 'Page saved successfully');
        } catch (error) {
            console.error(error);
            showNotification('error', 'Error saving page');
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
                            placeholder="Search pages by city or course..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
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
                                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                        No landing pages found. Build your first one!
                                    </td>
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
                                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {page.course}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${page.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                                {page.isActive ? 'Active' : 'Draft'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button
                                                onClick={() => handleEditClick(page._id!)}
                                                disabled={editingId === page._id}
                                                className="text-indigo-600 hover:text-indigo-900 mr-4 disabled:opacity-50"
                                            >
                                                {editingId === page._id ? (
                                                    <Loader2 className="w-4 h-4 animate-spin" />
                                                ) : (
                                                    <Edit2 className="w-4 h-4" />
                                                )}
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

            <LandingPageModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                initialData={currentEditingPage}
            />
        </div>
    );
}
