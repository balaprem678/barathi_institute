import { useState, useEffect } from 'react';
import { X, Save, RefreshCw } from 'lucide-react';

interface SEO {
    focusTitle: string;
    focusKeywords: string;
    metaTitle: string;
    metaKeywords: string;
    metaDescription: string;
}

export interface LandingPageData {
    _id?: string;
    slug: string;
    city: string;
    courseType: 'hotel-management' | 'paramedical';
    seo: SEO;
    isActive: boolean;
}

interface LandingPageModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (data: LandingPageData) => Promise<void>;
    initialData?: LandingPageData | null;
}

const defaultSEO: SEO = {
    focusTitle: '',
    focusKeywords: '',
    metaTitle: '',
    metaKeywords: '',
    metaDescription: ''
};

const defaultData: LandingPageData = {
    slug: '',
    city: '',
    courseType: 'hotel-management',
    seo: defaultSEO,
    isActive: true
};

export default function LandingPageModal({ isOpen, onClose, onSave, initialData }: LandingPageModalProps) {
    const [formData, setFormData] = useState<LandingPageData>(defaultData);
    const [loading, setLoading] = useState(false);
    const [autoSlug, setAutoSlug] = useState(true);

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
            setAutoSlug(false); // Don't auto-update slug on edit unless requested
        } else {
            setFormData(defaultData);
            setAutoSlug(true);
        }
    }, [initialData, isOpen]);

    // Auto-generate slug when City or CourseType changes
    useEffect(() => {
        if (autoSlug && !initialData) {
            const courseSlug = formData.courseType === 'hotel-management' ? 'hotel-management-course' : 'paramedical-course';
            const citySlug = formData.city.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            if (citySlug) {
                setFormData(prev => ({ ...prev, slug: `${courseSlug}-in-${citySlug}` }));
            }
        }
    }, [formData.city, formData.courseType, autoSlug, initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name.startsWith('seo.')) {
            const seoField = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                seo: { ...prev.seo, [seoField]: value }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await onSave(formData);
            onClose();
        } catch (error) {
            console.error(error);
            // Handle error (toast or alert)
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-y-auto">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {initialData ? 'Edit Landing Page' : 'Add New Landing Page'}
                    </h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                            <input
                                type="text"
                                name="city"
                                required
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="e.g. Villupuram"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Course Type</label>
                            <select
                                name="courseType"
                                value={formData.courseType}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="hotel-management">Hotel Management</option>
                                <option value="paramedical">Paramedical</option>
                            </select>
                        </div>
                    </div>

                    {/* Slug */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <label className="block text-sm font-medium text-gray-700">URL Slug</label>
                            <button
                                type="button"
                                onClick={() => setAutoSlug(!autoSlug)}
                                className={`text-xs flex items-center ${autoSlug ? 'text-blue-600' : 'text-gray-500'}`}
                            >
                                <RefreshCw className="w-3 h-3 mr-1" />
                                {autoSlug ? 'Auto-generating' : 'Manual'}
                            </button>
                        </div>
                        <input
                            type="text"
                            name="slug"
                            required
                            value={formData.slug}
                            onChange={(e) => {
                                setAutoSlug(false);
                                handleChange(e);
                            }}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-50"
                        />
                        <p className="mt-1 text-xs text-gray-500">Example: hotel-management-course-in-villupuram</p>
                    </div>

                    <div className="border-t border-gray-100 pt-4">
                        <h3 className="text-md font-semibold text-gray-800 mb-4">SEO Metadata</h3>

                        <div className="grid grid-cols-1 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Focus Title (H1)</label>
                                <input
                                    type="text"
                                    name="seo.focusTitle"
                                    value={formData.seo.focusTitle}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Optional override for main heading"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
                                <input
                                    type="text"
                                    name="seo.metaTitle"
                                    value={formData.seo.metaTitle}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    maxLength={60}
                                />
                                <p className="text-xs text-gray-500 text-right">{formData.seo.metaTitle.length}/60</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                                <textarea
                                    name="seo.metaDescription"
                                    value={formData.seo.metaDescription}
                                    onChange={handleChange}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    maxLength={160}
                                />
                                <p className="text-xs text-gray-500 text-right">{formData.seo.metaDescription.length}/160</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Focus Keywords (Comma separated)</label>
                                <input
                                    type="text"
                                    name="seo.focusKeywords"
                                    value={formData.seo.focusKeywords}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                </form>

                <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-lg flex justify-end space-x-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                        <Save className="w-4 h-4 mr-2" />
                        {loading ? 'Saving...' : 'Save Page'}
                    </button>
                </div>
            </div>
        </div>
    );
}
