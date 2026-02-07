'use client';

import { usePathname } from 'next/navigation';
import { LogOut, Menu } from 'lucide-react';
import { AuthService } from '@/services/authService';

interface HeaderProps {
    onMenuClick: () => void;
}

export default function AdminHeader({ onMenuClick }: HeaderProps) {
    const pathname = usePathname();

    // Simple breadcrumb logic
    const getPageTitle = () => {
        if (pathname.includes('/dashboard')) return 'Dashboard';
        if (pathname.includes('/students')) return 'Students';
        if (pathname.includes('/settings')) return 'Settings';
        return 'Admin';
    };

    return (
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 sm:px-8">
            <div className="flex items-center">
                <button
                    onClick={onMenuClick}
                    className="md:hidden mr-4 p-2 text-gray-500 hover:text-gray-700 rounded-md hover:bg-gray-100 focus:outline-none"
                >
                    <Menu className="h-6 w-6" />
                </button>
                <h2 className="text-lg font-semibold text-gray-800">{getPageTitle()}</h2>
            </div>
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        A
                    </div>
                    <span className="text-sm font-medium text-gray-700">Admin User</span>
                </div>
                <button
                    onClick={() => AuthService.logout()}
                    className="p-2 text-gray-500 hover:text-red-600 transition-colors rounded-full hover:bg-gray-100"
                    title="Sign Out"
                >
                    <LogOut className="h-5 w-5" />
                </button>
            </div>
        </header>
    );
}
