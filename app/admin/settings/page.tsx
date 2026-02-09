'use client';
import { useState, useEffect } from 'react';
import { Save, Globe, Mail, Search as SearchIcon, Loader2 } from 'lucide-react';
import { AuthService } from '@/services/authService';
import { useNotification } from '@/context/NotificationContext';

export default function SettingsPage() {
    const { showNotification } = useNotification();
    const [activeTab, setActiveTab] = useState('general');
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [formData, setFormData] = useState({
        general: {
            siteName: '',
        },
        smtpHost: '',
        smtpPort: '',
        smtpUser: '',
        smtpPass: '',
        fromEmail: '',
        recipientEmails: '',
        seo: {
            title: '',
            description: '',
            keywords: '',
            ogTitle: '',
            ogDescription: '',
        }
    });

    useEffect(() => {
        const fetchSettings = async () => {
            try {
                const res = await AuthService.fetchAuth('/api/settings');
                if (res.ok) {
                    const data = await res.json();
                    setFormData(prev => ({
                        ...prev,
                        ...data,
                        general: { ...prev.general, ...(data.general || {}) },
                        seo: { ...prev.seo, ...(data.seo || {}) }
                    }));
                }
            } catch (error) {
                console.error('Error fetching settings:', error);
            } finally {
                setFetching(false);
            }
        };
        fetchSettings();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, section?: string) => {
        const { name, value } = e.target;
        if (section) {
            setFormData(prev => ({
                ...prev,
                [section]: {
                    ...prev[section as keyof typeof prev] as object,
                    [name]: value
                }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await AuthService.fetchAuth('/api/settings', {
                method: 'POST',
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                showNotification('success', 'Settings saved successfully!');
            } else {
                showNotification('error', 'Failed to save settings');
            }
        } catch (error) {
            console.error('Error saving settings:', error);
            showNotification('error', 'Error saving settings');
        } finally {
            setLoading(false);
        }
    };

    if (fetching) return <div className="p-8 text-center text-gray-500">Loading settings...</div>;

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-2xl font-bold text-gray-800">Settings</h1>

            {/* Tabs */}
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8">
                    <button
                        onClick={() => setActiveTab('general')}
                        className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'general'
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                    >
                        <Globe className="w-4 h-4 mr-2" />
                        General
                    </button>
                    <button
                        onClick={() => setActiveTab('smtp')}
                        className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'smtp'
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                    >
                        <Mail className="w-4 h-4 mr-2" />
                        SMTP Configuration
                    </button>
                    <button
                        onClick={() => setActiveTab('seo')}
                        className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center ${activeTab === 'seo'
                            ? 'border-blue-500 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                    >
                        <SearchIcon className="w-4 h-4 mr-2" />
                        SEO & Metadata
                    </button>
                </nav>
            </div>

            <form onSubmit={handleSubmit} className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">

                {/* General Settings */}
                {activeTab === 'general' && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">General Settings</h3>
                            <p className="mt-1 text-sm text-gray-500">Basic configuration for the website.</p>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            <InputGroup label="Site Name" name="siteName" value={formData.general.siteName} onChange={(e) => handleChange(e, 'general')} />
                        </div>
                    </div>
                )}

                {/* SMTP Settings */}
                {activeTab === 'smtp' && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">SMTP Configuration</h3>
                            <p className="mt-1 text-sm text-gray-500">Configure email settings for system notifications.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <InputGroup label="SMTP Host" name="smtpHost" value={formData.smtpHost} onChange={handleChange} />
                            <InputGroup label="SMTP Port" name="smtpPort" value={formData.smtpPort} onChange={handleChange} />
                            <InputGroup label="SMTP User" name="smtpUser" value={formData.smtpUser} onChange={handleChange} />
                            <InputGroup label="SMTP Password" name="smtpPass" type="password" value={formData.smtpPass} onChange={handleChange} />
                            <div className="col-span-1 md:col-span-2">
                                <InputGroup label="From Email (Verified Sender)" name="fromEmail" value={formData.fromEmail} onChange={handleChange} placeholder="e.g. info@bharathiinstitutes.com" />
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <InputGroup label="Recipient Emails (comma separated)" name="recipientEmails" value={formData.recipientEmails} onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                )}

                {/* SEO Settings */}
                {activeTab === 'seo' && (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-medium leading-6 text-gray-900">SEO & Metadata</h3>
                            <p className="mt-1 text-sm text-gray-500">Manage search engine optimization tags for the public site.</p>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            <InputGroup label="Meta Title" name="title" value={formData.seo.title} onChange={(e) => handleChange(e, 'seo')} />
                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                                <textarea
                                    name="description"
                                    rows={3}
                                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    value={formData.seo.description}
                                    onChange={(e) => handleChange(e, 'seo')}
                                />
                            </div>
                            <InputGroup label="Keywords" name="keywords" value={formData.seo.keywords} onChange={(e) => handleChange(e, 'seo')} placeholder="comma, separated, keywords" />

                            <div className="border-t border-gray-200 pt-6 mt-6">
                                <h4 className="text-base font-medium text-gray-900 mb-4">Open Graph (Social Media)</h4>
                                <div className="grid grid-cols-1 gap-6">
                                    <InputGroup label="OG Title" name="ogTitle" value={formData.seo.ogTitle} onChange={(e) => handleChange(e, 'seo')} placeholder="Defaults to Meta Title if empty" />
                                    <InputGroup label="OG Description" name="ogDescription" value={formData.seo.ogDescription} onChange={(e) => handleChange(e, 'seo')} placeholder="Defaults to Meta Description if empty" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
                    <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    >
                        {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
}

function InputGroup({ label, name, value, onChange, type = "text", placeholder = "" }: { label: string, name: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, type?: string, placeholder?: string }) {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md h-10 px-3 border"
            />
        </div>
    );
}
