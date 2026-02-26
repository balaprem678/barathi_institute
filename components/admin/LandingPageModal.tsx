import { useState, useEffect } from 'react';
import { X, Save, RefreshCw } from 'lucide-react';
import '../../app/(public)/locationseo/locationseo.scss';

interface SEO {
    focusKeywords: string;
    metaTitle: string;
    metaKeywords: string;
    metaDescription: string;
}

export interface LandingPageData {
    _id?: string;
    slug: string;
    city: string;
    course: string;
    htmlContent: string;
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
    focusKeywords: '',
    metaTitle: '',
    metaKeywords: '',
    metaDescription: ''
};

const defaultData: LandingPageData = {
    slug: '',
    city: '',
    course: '',
    htmlContent: '',
    seo: defaultSEO,
    isActive: true
};

export default function LandingPageModal({ isOpen, onClose, onSave, initialData }: LandingPageModalProps) {
    const [formData, setFormData] = useState<LandingPageData>(defaultData);
    const [loading, setLoading] = useState(false);
    const [autoSlug, setAutoSlug] = useState(true);
    const [showPreview, setShowPreview] = useState(false);

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
            setAutoSlug(false);
        } else {
            setFormData(defaultData);
            setAutoSlug(true);
        }
        setShowPreview(false);
    }, [initialData, isOpen]);

    // Auto-generate slug when City or Course changes
    useEffect(() => {
        if (autoSlug && !initialData) {
            const coursePart = formData.course.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
            const cityPart = formData.city.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');

            if (coursePart && cityPart) {
                setFormData(prev => ({ ...prev, slug: `${coursePart}-in-${cityPart}` }));
            } else if (coursePart) {
                setFormData(prev => ({ ...prev, slug: coursePart }));
            } else if (cityPart) {
                setFormData(prev => ({ ...prev, slug: `course-in-${cityPart}` }));
            }
        }
    }, [formData.city, formData.course, autoSlug, initialData]);

    const loadDefaultTemplate = () => {
        const template = `<div>
    <section class="hero">
        <h1>
            Hotel <br />
            Management <br />
            Course
        </h1>
        <div class="hero-side">
            <p>Bharathi Institutes</p>
            <span>Villupuram</span>
        </div>
    </section>
    <section class="editorial">
        <div class="left">
            <h2>Learn Hospitality Professionally</h2>
            <p>
                Join Bharathi Institutes for hands-on hotel management
                training with internships, catering practice and
                industry exposure.
            </p>
        </div>
        <div class="right">
            <div class="highlight">
                <h3>Admissions Open</h3>
                <p>Placement Support Available</p>
            </div>
        </div>
    </section>
    <section class="zigzag">
        <div class="item">
            <h3>Food Production</h3>
            <p>Professional culinary and kitchen operations training.</p>
        </div>
        <div class="item dark">
            <h3>Front Office</h3>
            <p>Guest handling and hotel administration skills.</p>
        </div>
        <div class="item">
            <h3>Housekeeping</h3>
            <p>Hotel maintenance and service management.</p>
        </div>
    </section>
    <section class="cta">
        <h2>Start Your Hospitality Career</h2>
        <a href="#">Apply Now</a>
    </section>
</div>`;
        setFormData(prev => ({ ...prev, htmlContent: template }));
    };

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
                            <label className="block text-sm font-medium text-gray-700 mb-1">Course Name</label>
                            <input
                                type="text"
                                name="course"
                                required
                                value={formData.course}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="e.g. Hotel Management Course"
                            />
                        </div>
                    </div>

                    {/* HTML Content & Preview */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="block text-sm font-medium text-gray-700">HTML Content</label>
                            <div className="flex space-x-2">
                                <button
                                    type="button"
                                    onClick={loadDefaultTemplate}
                                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-2 py-1 rounded"
                                >
                                    Load Default Template
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowPreview(!showPreview)}
                                    className={`text-xs px-2 py-1 rounded font-medium ${showPreview ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-600'}`}
                                >
                                    {showPreview ? 'Edit Mode' : 'Preview Mode'}
                                </button>
                            </div>
                        </div>

                        {showPreview ? (
                            <div className="w-full h-96 border border-gray-200 rounded-lg overflow-auto bg-white">
                                <div className="seo-page-content">
                                    <div
                                        dangerouslySetInnerHTML={{ __html: formData.htmlContent || '<p class="text-gray-400 italic p-4">No content to preview</p>' }}
                                    />
                                </div>
                            </div>
                        ) : (
                            <textarea
                                name="htmlContent"
                                value={formData.htmlContent}
                                onChange={handleChange}
                                rows={12}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 font-mono text-sm"
                                placeholder="Paste your HTML here..."
                            />
                        )}
                        <p className="text-xs text-gray-500">HTML will be rendered exactly as entered. Use the preview to check design.</p>
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">Focus Keywords</label>
                                <input
                                    type="text"
                                    name="seo.focusKeywords"
                                    value={formData.seo.focusKeywords}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Keywords for SEO management"
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Keywords</label>
                                <input
                                    type="text"
                                    name="seo.metaKeywords"
                                    value={formData.seo.metaKeywords}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Comma separated keywords"
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
