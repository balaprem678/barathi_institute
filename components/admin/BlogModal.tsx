import { useState, useEffect, useRef } from 'react';
import {
    X, Save, RefreshCw, Upload, Image as ImageIcon,
    Eye, FileCode, Bold, Italic, List, ListOrdered,
    Heading1, Heading2, Layout, Underline,
    AlignLeft, AlignCenter, AlignRight, AlignJustify,
    Eraser, Link as LinkIcon, Minus, Type,
    ChevronDown, ChevronUp, Code, Globe
} from 'lucide-react';
import Image from 'next/image';
import '@/app/(public)/blog/blog.scss';

interface SEO {
    focusKeywords: string;
    metaTitle: string;
    metaKeywords: string;
    metaDescription: string;
}

export interface BlogData {
    _id?: string;
    title: string;
    slug: string;
    content: string;
    imagePath?: string;
    course: string;
    studentName: string;
    isFeatured: boolean;
    isActive: boolean;
    seo: SEO;
}

interface BlogModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (formData: FormData) => Promise<void>;
    initialData?: BlogData | null;
}

const defaultSEO: SEO = {
    focusKeywords: '',
    metaTitle: '',
    metaKeywords: '',
    metaDescription: ''
};

const defaultData: BlogData = {
    title: '',
    slug: '',
    content: '',
    course: '',
    studentName: '',
    isFeatured: false,
    isActive: true,
    seo: defaultSEO
};

export default function BlogModal({ isOpen, onClose, onSave, initialData }: BlogModalProps) {
    const [formData, setFormData] = useState<BlogData>(defaultData);
    const [loading, setLoading] = useState(false);
    const [autoSlug, setAutoSlug] = useState(true);
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>('');
    const [editMode, setEditMode] = useState<'visual' | 'html'>('visual');
    const [showFullPreview, setShowFullPreview] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
            setAutoSlug(false);
            setPreviewUrl(initialData.imagePath || '');
        } else {
            setFormData(defaultData);
            setAutoSlug(true);
            setPreviewUrl('');
        }
        setSelectedImage(null);
        setEditMode('visual');
        setShowFullPreview(false);
    }, [initialData, isOpen]);

    // Sync content to visual editor when editMode changes or modal opens
    useEffect(() => {
        if (editMode === 'visual' && editorRef.current) {
            editorRef.current.innerHTML = formData.content;
        }
    }, [editMode, isOpen, initialData]);

    // Auto-generate slug when title changes
    useEffect(() => {
        if (autoSlug && !initialData && formData.title) {
            const slug = formData.title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
            setFormData(prev => ({ ...prev, slug }));
        }
    }, [formData.title, autoSlug, initialData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const val = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

        if (name.startsWith('seo.')) {
            const seoField = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                seo: { ...prev.seo, [seoField]: value }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: val }));
        }
    };

    const handleVisualChange = () => {
        if (editorRef.current) {
            setFormData(prev => ({ ...prev, content: editorRef.current!.innerHTML }));
        }
    };

    const execCommand = (command: string, value: string = '') => {
        if (editMode === 'visual') {
            document.execCommand(command, false, value);
            handleVisualChange();
            editorRef.current?.focus();
        } else {
            // Basic HTML insertion for Code mode
            if (command === 'bold') insertTag('<b>', '</b>');
            if (command === 'italic') insertTag('<i>', '</i>');
            if (command === 'underline') insertTag('<u>', '</u>');
            if (command === 'formatBlock') insertTag(`<${value}>`, `</${value}>`);
            if (command === 'insertUnorderedList') insertTag('<ul>\n  <li>', '</li>\n</ul>');
        }
    };

    const insertTag = (tag: string, closeTag?: string) => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const before = text.substring(0, start);
        const after = text.substring(end, text.length);
        const selected = text.substring(start, end);

        const newContent = before + tag + selected + (closeTag || '') + after;
        setFormData(prev => ({ ...prev, content: newContent }));

        setTimeout(() => {
            textarea.focus();
            const newCursorPos = start + tag.length + selected.length + (closeTag?.length || 0);
            textarea.setSelectionRange(newCursorPos, newCursorPos);
        }, 0);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const data = new FormData();
            data.append('title', formData.title);
            data.append('slug', formData.slug);
            data.append('content', formData.content);
            data.append('course', formData.course);
            data.append('studentName', formData.studentName);
            data.append('isFeatured', String(formData.isFeatured));
            data.append('isActive', String(formData.isActive));

            data.append('seo.metaTitle', formData.seo.metaTitle);
            data.append('seo.metaDescription', formData.seo.metaDescription);
            data.append('seo.metaKeywords', formData.seo.metaKeywords);
            data.append('seo.focusKeywords', formData.seo.focusKeywords);

            if (selectedImage) {
                data.append('image', selectedImage);
            }

            await onSave(data);
            onClose();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 overflow-y-auto">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl max-h-[96vh] flex flex-col">
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {initialData ? 'Edit Blog Post' : 'Add New Blog Post'}
                    </h2>
                    <div className="flex items-center space-x-3">
                        <button
                            type="button"
                            onClick={() => setShowFullPreview(!showFullPreview)}
                            className={`flex items-center px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${showFullPreview ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                        >
                            <Eye className="w-4 h-4 mr-2" />
                            {showFullPreview ? 'Exit Preview' : 'Full Preview'}
                        </button>
                        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors p-1">
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
                    {showFullPreview ? (
                        /* Complete Site Preview Mode */
                        <div className="bg-white rounded-lg border border-gray-200 shadow-inner overflow-hidden flex flex-col min-h-[500px]">
                            <div className="p-3 bg-gray-50 border-b border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center justify-between">
                                <span>Site Preview Mode</span>
                                <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Live Rendering</span>
                            </div>
                            <div className="flex-1 overflow-y-auto p-8">
                                <div className="blog-post-content prose lg:prose-xl max-w-none">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="px-2 py-0.5 bg-blue-100 text-blue-600 rounded text-[10px] font-bold uppercase">
                                            {formData.course || 'EDUCATIONAL'}
                                        </span>
                                        <span className="text-gray-400 text-[10px]">
                                            {new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}
                                        </span>
                                    </div>
                                    <h1 className="text-3xl font-bold text-gray-900 mb-6">{formData.title || 'Untitled Blog Post'}</h1>

                                    {previewUrl && (
                                        <div className="mb-6 rounded-xl overflow-hidden shadow-sm">
                                            <img src={previewUrl} alt="Featured" className="w-full h-auto object-cover max-h-[400px]" />
                                        </div>
                                    )}

                                    <div
                                        className="text-gray-700 leading-relaxed font-normal blog-content-body"
                                        dangerouslySetInnerHTML={{ __html: formData.content || '<p class="text-gray-400 italic">No content to preview...</p>' }}
                                    />

                                    {formData.studentName && (
                                        <div className="mt-8 pt-6 border-t border-gray-100 italic text-gray-500 text-sm">
                                            Story by: {formData.studentName} ({formData.course})
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Info Sidebar */}
                                <div className="md:col-span-1 space-y-6">
                                    {/* Image Upload */}
                                    <div className="space-y-2">
                                        <label className="block text-sm font-bold text-gray-700">Featured Image</label>
                                        <div
                                            onClick={() => fileInputRef.current?.click()}
                                            className="relative w-full aspect-video border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-all overflow-hidden bg-gray-50"
                                        >
                                            {previewUrl ? (
                                                <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
                                            ) : (
                                                <>
                                                    <ImageIcon className="w-10 h-10 text-gray-400" />
                                                    <span className="mt-2 text-xs text-gray-500 font-medium font-sans">Set featured image</span>
                                                </>
                                            )}
                                        </div>
                                        <input type="file" ref={fileInputRef} onChange={handleImageChange} accept="image/*" className="hidden" />
                                    </div>

                                    <div className="space-y-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Student Name</label>
                                            <input
                                                type="text"
                                                name="studentName"
                                                value={formData.studentName}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                                placeholder="e.g. John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Course Code</label>
                                            <input
                                                type="text"
                                                name="course"
                                                value={formData.course}
                                                onChange={handleChange}
                                                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                                                placeholder="e.g. DHM"
                                            />
                                        </div>
                                        <div className="flex flex-col space-y-3 pt-2">
                                            <label className="flex items-center space-x-2 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.isFeatured}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, isFeatured: e.target.checked }))}
                                                    className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                                                />
                                                <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">Pin to Top (Featured)</span>
                                            </label>
                                            <label className="flex items-center space-x-2 cursor-pointer group">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.isActive}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, isActive: e.target.checked }))}
                                                    className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                                />
                                                <span className="text-sm font-bold text-gray-600 group-hover:text-gray-900 transition-colors">Visible on Site</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                {/* Editor Section */}
                                <div className="md:col-span-2 space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1 flex justify-between items-center">
                                            <span>Blog Title *</span>
                                            {initialData && <span className="text-[10px] text-gray-400 italic">Editing existing post</span>}
                                        </label>
                                        <input
                                            type="text"
                                            name="title"
                                            required
                                            value={formData.title}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 text-lg font-bold text-gray-800 outline-none"
                                            placeholder="The headline that grabs attention..."
                                        />
                                    </div>

                                    {/* Advanced Toolbar Editor */}
                                    <div className="flex flex-col border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm ring-1 ring-gray-100">
                                        <div className="bg-gray-50 border-b border-gray-100 p-2 flex flex-wrap items-center gap-1">
                                            {/* Mode Toggle */}
                                            <button
                                                type="button"
                                                onClick={() => setEditMode(editMode === 'visual' ? 'html' : 'visual')}
                                                className={`p-2 rounded-lg flex items-center gap-1.5 transition-all text-xs font-bold ${editMode === 'html' ? 'bg-orange-600 text-white shadow-md' : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm border border-gray-200'}`}
                                                title="Toggle HTML/Visual"
                                            >
                                                <Code className="w-4 h-4" />
                                                {editMode === 'html' ? 'CODE VIEW' : 'VISUAL VIEW'}
                                            </button>

                                            <div className="w-px h-6 bg-gray-200 mx-1" />

                                            {/* Formatting Groups */}
                                            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-xs">
                                                <button type="button" onClick={() => execCommand('bold')} className="p-2 hover:bg-gray-50 text-gray-600" title="Bold"><Bold className="w-4 h-4" /></button>
                                                <button type="button" onClick={() => execCommand('italic')} className="p-2 hover:bg-gray-50 text-gray-600" title="Italic"><Italic className="w-4 h-4" /></button>
                                                <button type="button" onClick={() => execCommand('underline')} className="p-2 hover:bg-gray-50 text-gray-600" title="Underline"><Underline className="w-4 h-4" /></button>
                                            </div>

                                            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-xs">
                                                <button type="button" onClick={() => execCommand('formatBlock', 'h1')} className="p-2 hover:bg-gray-50 text-gray-600" title="Heading 1"><Heading1 className="w-4 h-4" /></button>
                                                <button type="button" onClick={() => execCommand('formatBlock', 'h2')} className="p-2 hover:bg-gray-50 text-gray-600" title="Heading 2"><Heading2 className="w-4 h-4" /></button>
                                            </div>

                                            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-xs">
                                                <button type="button" onClick={() => execCommand('insertUnorderedList')} className="p-2 hover:bg-gray-50 text-gray-600" title="Bullet List"><List className="w-4 h-4" /></button>
                                                <button type="button" onClick={() => execCommand('insertOrderedList')} className="p-2 hover:bg-gray-50 text-gray-600" title="Numbered List"><ListOrdered className="w-4 h-4" /></button>
                                            </div>

                                            <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-xs">
                                                <button type="button" onClick={() => execCommand('justifyLeft')} className="p-2 hover:bg-gray-50 text-gray-600"><AlignLeft className="w-4 h-4" /></button>
                                                <button type="button" onClick={() => execCommand('justifyCenter')} className="p-2 hover:bg-gray-50 text-gray-600"><AlignCenter className="w-4 h-4" /></button>
                                            </div>

                                            <button type="button" onClick={() => execCommand('removeFormat')} className="p-2 bg-white border border-gray-200 rounded-lg shadow-xs hover:bg-gray-50 text-red-500" title="Clear Formatting"><Eraser className="w-4 h-4" /></button>

                                            <div className="flex-1" />

                                            <button
                                                type="button"
                                                onClick={() => {
                                                    const template = `<div class="blog-preview-placeholder">
  <h2 class="text-2xl font-bold text-blue-800 mb-4">Starting My Journey...</h2>
  <p class="leading-relaxed mb-4">Bharathi Institute has been a transformative experience for me. The hands-on training and industry exposure are unmatched.</p>
  <ul class="list-disc pl-5 mb-4">
    <li>Expert Faculty</li>
    <li>Practical Labs</li>
    <li>Placement Support</li>
  </ul>
</div>`;
                                                    if (editMode === 'visual' && editorRef.current) {
                                                        editorRef.current.innerHTML = template;
                                                        handleVisualChange();
                                                    } else {
                                                        setFormData(prev => ({ ...prev, content: template }));
                                                    }
                                                }}
                                                className="p-2 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-xs font-bold"
                                                title="Use Template"
                                            >
                                                <Layout className="w-4 h-4" />
                                            </button>
                                        </div>

                                        {editMode === 'visual' ? (
                                            <div
                                                ref={editorRef}
                                                contentEditable={true}
                                                onInput={handleVisualChange}
                                                onBlur={handleVisualChange}
                                                className="w-full min-h-[400px] p-6 outline-none prose lg:prose-xl max-w-none text-gray-700 font-sans blog-content-body overflow-y-auto"
                                                style={{ backgroundColor: '#fff' }}
                                            />
                                        ) : (
                                            <textarea
                                                name="content"
                                                ref={textareaRef}
                                                required
                                                value={formData.content}
                                                onChange={handleChange}
                                                rows={16}
                                                className="w-full min-h-[400px] p-6 text-sm font-mono text-gray-800 bg-gray-50 outline-none resize-none border-none"
                                                placeholder="Enter HTML source code here..."
                                                style={{ backgroundColor: '#fffbe6' }}
                                            />
                                        )}

                                        <div className="bg-gray-50 border-t border-gray-100 p-2 text-[10px] text-gray-400 flex items-center">
                                            <div className={`w-2 h-2 rounded-full mr-2 ${editMode === 'visual' ? 'bg-green-500' : 'bg-orange-500'}`} />
                                            Editing in {editMode === 'visual' ? 'Visual (WYSIWYG)' : 'HTML Source'} mode
                                        </div>
                                    </div>

                                    {/* URL Slug */}
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                                        <div className="flex-1 mr-4">
                                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">URL Slug</label>
                                            <div className="flex items-center">
                                                <span className="text-gray-400 text-xs mr-1">/blog/</span>
                                                <input
                                                    type="text"
                                                    name="slug"
                                                    required
                                                    value={formData.slug}
                                                    onChange={(e) => {
                                                        setAutoSlug(false);
                                                        handleChange(e);
                                                    }}
                                                    className="flex-1 bg-transparent border-none text-xs font-bold text-blue-600 focus:ring-0 p-0 outline-none"
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setAutoSlug(!autoSlug)}
                                            className={`p-2 rounded-lg transition-all ${autoSlug ? 'text-blue-600 bg-blue-50' : 'text-gray-400 bg-gray-50'}`}
                                            title={autoSlug ? 'Auto-syncing with title' : 'Manual entry'}
                                        >
                                            <RefreshCw className={`w-4 h-4 ${autoSlug ? 'animate-spin-slow' : ''}`} />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* SEO Collapsible */}
                            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <button
                                    type="button"
                                    className="w-full p-4 bg-gray-50 flex items-center justify-between hover:bg-gray-100 transition-colors"
                                    onClick={() => {
                                        const el = document.getElementById('seo-content');
                                        if (el) el.classList.toggle('hidden');
                                    }}
                                >
                                    <div className="flex items-center font-bold text-gray-700">
                                        <Globe className="w-5 h-5 mr-3 text-blue-500" />
                                        Search Engine Optimization (SEO)
                                    </div>
                                    <ChevronDown className="w-5 h-5 text-gray-400" />
                                </button>
                                <div id="seo-content" className="p-6 space-y-4 hidden border-t border-gray-100">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-1">Focus Keywords</label>
                                                <input
                                                    type="text"
                                                    name="seo.focusKeywords"
                                                    value={formData.seo.focusKeywords}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Main topic keywords"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-1">Meta Title</label>
                                                <input
                                                    type="text"
                                                    name="seo.metaTitle"
                                                    value={formData.seo.metaTitle}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                                                    placeholder="Google results title"
                                                    maxLength={60}
                                                />
                                                <div className="text-[10px] text-gray-400 mt-1 text-right">{formData.seo.metaTitle.length}/60</div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-gray-700 mb-1">Meta Keywords</label>
                                                <input
                                                    type="text"
                                                    name="seo.metaKeywords"
                                                    value={formData.seo.metaKeywords}
                                                    onChange={handleChange}
                                                    className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                                                    placeholder="keyword1, keyword2..."
                                                />
                                            </div>
                                        </div>
                                        <div className="h-full">
                                            <label className="block text-sm font-bold text-gray-700 mb-1">Meta Description</label>
                                            <textarea
                                                name="seo.metaDescription"
                                                value={formData.seo.metaDescription}
                                                onChange={handleChange}
                                                rows={8}
                                                className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 h-32"
                                                placeholder="Brief summary for search engines..."
                                                maxLength={160}
                                            />
                                            <div className="text-[10px] text-gray-400 mt-1 text-right">{formData.seo.metaDescription.length}/160</div>

                                            {/* Google Preview Simulation */}
                                            <div className="mt-4 p-3 bg-white border border-gray-100 rounded-lg shadow-inner">
                                                <div className="text-xs text-blue-800 font-medium mb-1 truncate">{formData.seo.metaTitle || (formData.title + ' | Bharathi Institutes')}</div>
                                                <div className="text-[10px] text-green-700 mb-1 truncate">https://bharathiinstitutes.com/blog/{formData.slug}</div>
                                                <div className="text-[10px] text-gray-500 line-clamp-2">{formData.seo.metaDescription || 'Add a meta description to see how it looks in Google results...'}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </form>

                <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-lg flex justify-between items-center">
                    <div className="text-xs text-gray-400 flex items-center italic">
                        <Save className="w-3 h-3 mr-1" /> All changes are saved locally until you submit
                    </div>
                    <div className="flex space-x-3">
                        <button
                            onClick={onClose}
                            className="px-6 py-2.5 text-sm font-bold text-gray-600 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 hover:text-gray-800 transition-all shadow-sm"
                        >
                            Discard
                        </button>
                        <button
                            onClick={handleSubmit}
                            disabled={loading || !formData.title || !formData.content}
                            className="flex items-center px-8 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl hover:from-blue-700 hover:to-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition-all"
                        >
                            {loading ? <RefreshCw className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                            {loading ? 'Publishing...' : 'Publish Blog Post'}
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .animate-spin-slow {
                    animation: spin 3s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
