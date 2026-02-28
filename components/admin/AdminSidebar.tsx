'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Users,
    Settings as SettingsIcon,
    LogOut,
    ChevronDown,
    ChevronRight,
    X,
    Mail,
    Globe,
    FileText
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

export default function AdminSidebar({ isOpen, setIsOpen }: SidebarProps) {
    const pathname = usePathname();
    const [isSettingsOpen, setIsSettingsOpen] = useState(pathname.includes('/admin/settings'));

    const isActive = (path: string) => pathname === path;
    const isSettingsActive = pathname.includes('/admin/settings');

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden transition-opacity"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar Container */}
            <aside
                className={`
                    fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 
                    transform transition-transform duration-300 ease-in-out
                    md:relative md:translate-x-0 flex flex-col h-full
                    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <h1 className="text-xl font-bold text-gray-800">Admin</h1>
                    {/* Close button for mobile */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="md:hidden p-1 text-gray-500 hover:text-gray-700"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <Link
                        href="/admin/dashboard"
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive('/admin/dashboard')
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                    >
                        <LayoutDashboard className="w-5 h-5 mr-3" />
                        Dashboard
                    </Link>

                    <Link
                        href="/admin/landing-pages"
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive('/admin/landing-pages')
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                    >
                        <Globe className="w-5 h-5 mr-3" />
                        SEO Pages
                    </Link>

                    <Link
                        href="/admin/students"
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive('/admin/students')
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                    >
                        <Users className="w-5 h-5 mr-3" />
                        Students
                    </Link>

                    <Link
                        href="/admin/enquiries"
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive('/admin/enquiries')
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                    >
                        <Mail className="w-5 h-5 mr-3" />
                        Enquiries
                    </Link>

                    <Link
                        href="/admin/blogs"
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive('/admin/blogs')
                            ? 'bg-blue-50 text-blue-600'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                            }`}
                    >
                        <FileText className="w-5 h-5 mr-3" />
                        Blogs
                    </Link>

                    {/* Collapsible Settings */}
                    <div>
                        <button
                            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                            className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isSettingsActive
                                ? 'text-blue-600 bg-blue-50/50'
                                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            <div className="flex items-center">
                                <SettingsIcon className="w-5 h-5 mr-3" />
                                Settings
                            </div>
                            {isSettingsOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </button>

                        {isSettingsOpen && (
                            <div className="ml-4 pl-4 border-l border-gray-200 mt-1 space-y-1">
                                <Link
                                    href="/admin/settings?tab=general"
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive('/admin/settings') && (!pathname.includes('?tab') || true) // Simplified for now
                                        ? 'text-gray-700 hover:text-blue-600'
                                        : 'text-gray-500 hover:text-gray-900'
                                        }`}
                                >
                                    All Settings
                                </Link>
                            </div>
                        )}
                    </div>
                </nav>


            </aside>
        </>
    );
}
