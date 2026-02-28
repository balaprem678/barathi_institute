'use client';
import { useState, useEffect } from 'react';
import { Plus, Search, Edit2, Trash2, ExternalLink, Star } from 'lucide-react';
import { AuthService } from '@/services/authService';
import BlogModal, { BlogData } from '@/components/admin/BlogModal';
import Link from 'next/link';
import { useNotification } from '@/context/NotificationContext';
import Image from 'next/image';

export default function AdminBlogs() {
    const { showNotification } = useNotification();
    const [blogs, setBlogs] = useState<BlogData[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEditingBlog, setCurrentEditingBlog] = useState<BlogData | null>(null);

    const fetchBlogs = async () => {
        try {
            setLoading(true);
            const res = await fetch('/api/blogs'); // Public GET for list
            if (res.ok) {
                const data = await res.json();
                setBlogs(data);
            }
        } catch (error) {
            console.error('Error fetching blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this blog post? This will also delete the uploaded image.')) return;

        try {
            const res = await AuthService.fetchAuth(`/api/blogs/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                fetchBlogs();
                showNotification('success', 'Blog deleted successfully');
            } else {
                showNotification('error', 'Failed to delete blog');
            }
        } catch (error) {
            console.error(error);
            showNotification('error', 'An error occurred while deleting');
        }
    };

    const handleSave = async (formData: FormData) => {
        try {
            const id = currentEditingBlog?._id;
            const url = id ? `/api/blogs/${id}` : '/api/blogs';
            const method = id ? 'PUT' : 'POST';

            const res = await AuthService.fetchAuth(url, {
                method,
                body: formData, // Sending FormData directly for image upload
                // Don't set Content-Type header, fetch will do it automatically for FormData
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.message || 'Failed to save');
            }

            fetchBlogs();
            showNotification('success', 'Blog saved successfully');
        } catch (error: any) {
            console.error(error);
            showNotification('error', error.message || 'Error saving blog');
            throw error;
        }
    };

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.studentName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <h1 className="text-2xl font-bold text-gray-800">Blog Management</h1>
                <button
                    onClick={() => {
                        setCurrentEditingBlog(null);
                        setIsModalOpen(true);
                    }}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    Create New Blog
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="p-4 border-b border-gray-100">
                    <div className="relative max-w-md">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search by title or student name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blog</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student/Course</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">Loading...</td>
                                </tr>
                            ) : filteredBlogs.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-gray-500">No blogs found.</td>
                                </tr>
                            ) : (
                                filteredBlogs.map((blog) => (
                                    <tr key={blog._id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-10 w-16 relative flex-shrink-0 bg-gray-100 rounded overflow-hidden mr-3">
                                                    {blog.imagePath ? (
                                                        <img src={blog.imagePath} alt={blog.title} className="object-cover w-full h-full" />
                                                    ) : (
                                                        <Star className="w-5 h-5 text-gray-300 m-auto mt-2" />
                                                    )}
                                                </div>
                                                <div className="max-w-xs truncate">
                                                    <div className="text-sm font-medium text-gray-900">{blog.title}</div>
                                                    <div className="text-xs text-gray-500">/{blog.slug}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{blog.studentName || 'N/A'}</div>
                                            <div className="text-xs text-gray-500">{blog.course || 'N/A'}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {blog.isFeatured && (
                                                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${blog.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                                {blog.isActive ? 'Published' : 'Draft'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Link href={`/blog/${blog.slug}`} target="_blank" className="text-gray-400 hover:text-gray-600 mr-4">
                                                <ExternalLink className="w-4 h-4" />
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    setCurrentEditingBlog(blog);
                                                    setIsModalOpen(true);
                                                }}
                                                className="text-blue-600 hover:text-blue-900 mr-4"
                                            >
                                                <Edit2 className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => blog._id && handleDelete(blog._id)}
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

            <BlogModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                initialData={currentEditingBlog}
            />
        </div>
    );
}
