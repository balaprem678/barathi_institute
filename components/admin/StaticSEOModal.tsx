'use client';

import React, { useState, useEffect } from 'react';
import { X, Save, Loader2, Globe, FileText, Key, Image as ImageIcon, Code, ChevronDown } from 'lucide-react';
import { STATIC_PAGES } from '@/lib/constants/staticPages';
import { AuthService } from '@/services/authService';

interface StaticSEOData {
    _id?: string;
    pagePath: string;
    pageName: string;
    metaTitle: string;
    metaDescription: string;
    metaKeywords: string;
    altText: string;
    schemaScript: string;
}

interface StaticSEOModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: () => void;
    initialData?: StaticSEOData | null;
    existingPaths?: string[];
}

export default function StaticSEOModal({ isOpen, onClose, onSave, initialData, existingPaths = [] }: StaticSEOModalProps) {
    const [formData, setFormData] = useState<StaticSEOData>({
        pagePath: '',
        pageName: '',
        metaTitle: '',
        metaDescription: '',
        metaKeywords: '',
        altText: '',
        schemaScript: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({
                pagePath: '',
                pageName: '',
                metaTitle: '',
                metaDescription: '',
                metaKeywords: '',
                altText: '',
                schemaScript: ''
            });
        }
    }, [initialData, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        
        if (name === 'pageSelect') {
            const selectedPage = STATIC_PAGES.find(p => p.path === value);
            if (selectedPage) {
                setFormData(prev => ({
                    ...prev,
                    pagePath: selectedPage.path,
                    pageName: selectedPage.name
                }));
            }
            return;
        }
        
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!formData.pagePath) {
            setError('Please select a page');
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            const url = initialData?._id 
                ? `/api/static-seo/${initialData._id}` 
                : '/api/static-seo';
            const method = initialData?._id ? 'PUT' : 'POST';

            const response = await AuthService.fetchAuth(url, {
                method,
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || 'Failed to save SEO data');
            }

            onSave();
            onClose();
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    // Filter out pages that already have SEO data, but keep the current one if editing
    const availablePages = STATIC_PAGES.filter(p => 
        !existingPaths.includes(p.path) || (initialData && initialData.pagePath === p.path)
    );

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 min-h-screen overflow-hidden">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
                onClick={onClose}
            />

            {/* Modal Content Box */}
            <div className="relative z-10 w-full max-w-2xl bg-white shadow-2xl rounded-3xl overflow-hidden transform transition-all flex flex-col max-h-[90vh]">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center">
                        <Globe className="w-5 h-5 mr-2 text-indigo-600" />
                        {initialData?._id ? 'Edit Static Page SEO' : 'Add Static Page SEO'}
                    </h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto">
                    {error && (
                        <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg border border-red-100">
                            {error}
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center">
                                <FileText className="w-4 h-4 mr-2 text-indigo-500" />
                                Select Static Page
                            </label>
                            <div className="relative">
                                <select
                                    name="pageSelect"
                                    value={formData.pagePath}
                                    onChange={handleChange}
                                    disabled={!!initialData?._id}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none appearance-none bg-white font-medium"
                                    required
                                >
                                    <option value="">Select a page...</option>
                                    {availablePages.map(page => (
                                        <option key={page.path} value={page.path}>
                                            {page.name} ({page.path})
                                        </option>
                                    ))}
                                </select>
                                {!initialData?._id && (
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                )}
                            </div>
                            {availablePages.length === 0 && !initialData?._id && (
                                <p className="mt-2 text-xs text-amber-600 font-medium">All static pages already have SEO configurations.</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Page Name</label>
                            <input
                                type="text"
                                name="pageName"
                                value={formData.pageName}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none bg-gray-50 font-medium"
                                placeholder="Page name will auto-populate"
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Page Path</label>
                            <input
                                type="text"
                                name="pagePath"
                                value={formData.pagePath}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 transition-all outline-none bg-gray-50 font-mono text-sm"
                                placeholder="Page path will auto-populate"
                                readOnly
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Meta Title</label>
                        <input
                            type="text"
                            name="metaTitle"
                            value={formData.metaTitle}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="SEO Title"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Meta Description</label>
                        <textarea
                            name="metaDescription"
                            value={formData.metaDescription}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="SEO Description"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center">
                            <Key className="w-4 h-4 mr-2 text-amber-500" />
                            Meta Keywords
                        </label>
                        <input
                            type="text"
                            name="metaKeywords"
                            value={formData.metaKeywords}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="Keywords separated by commas"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center">
                            <ImageIcon className="w-4 h-4 mr-2 text-pink-500" />
                            Alt Text (Main Banner)
                        </label>
                        <input
                            type="text"
                            name="altText"
                            value={formData.altText}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="Descriptive text for the main banner image"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1 flex items-center">
                            <Code className="w-4 h-4 mr-2 text-orange-500" />
                            Schema Script (JSON-LD)
                        </label>
                        <textarea
                            name="schemaScript"
                            value={formData.schemaScript}
                            onChange={handleChange}
                            rows={6}
                            className="w-full px-4 py-2 border border-gray-200 rounded-xl font-mono text-sm bg-gray-50 focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder='<script type="application/ld+json">...</script>'
                        />
                    </div>

                    <div className="flex justify-end gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2 text-sm font-bold text-gray-600 hover:text-gray-800 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex items-center px-6 py-2 text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 disabled:opacity-50"
                        >
                            {isSubmitting ? (
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            ) : (
                                <Save className="w-4 h-4 mr-2" />
                            )}
                            Save SEO Data
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
