'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Users,
    Settings,
    LogOut,
    Menu,
    X,
    Upload
} from 'lucide-react';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const pathname = usePathname();

    const toggleSidebar = () => setIsOpen(!isOpen);

    const menuItems = [
        { name: 'Dashboard', icon: LayoutDashboard, href: '/admin/dashboard' },
        { name: 'Students', icon: Users, href: '/admin/students' },
        { name: 'Settings', icon: Settings, href: '/admin/settings' },
    ];

    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href = '/admin/login';
    };

    return (
        <>
            {/* Mobile Toggle Button */}
            <button
                className="md:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-600 text-white rounded-md"
                onClick={toggleSidebar}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Sidebar Container */}
            <div
                className={`flex flex-col h-screen bg-[#1C2434] text-white transition-all duration-300 fixed md:static z-40
                ${isOpen ? 'w-64' : 'w-20 hidden md:flex'}
                `}
            >
                {/* Header */}
                <div className="flex items-center justify-between h-16 px-6 bg-[#1C2434]">
                    <h1 className={`font-bold text-xl flex items-center gap-2 ${!isOpen && 'hidden'}`}>
                        <div className="w-8 h-8 rounded bg-indigo-500 flex items-center justify-center text-white">B</div>
                        TailAdmin
                    </h1>
                    {!isOpen && <span className="font-bold text-xl ml-2">T</span>}
                    {isOpen && (
                        <button onClick={toggleSidebar} className="text-gray-400 hover:text-white lg:hidden">
                            <X size={24} />
                        </button>
                    )}
                </div>

                {/* Menu Items */}
                <nav className="flex-1 overflow-y-auto py-4 px-3">
                    <h3 className={`mb-4 ml-4 text-sm font-semibold text-gray-400 ${!isOpen && 'hidden'}`}>MENU</h3>
                    <ul className="space-y-2">
                        {menuItems.map((item) => {
                            const Icon = item.icon;
                            // Check active state loosely
                            const isActive = pathname === item.href;

                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium duration-300 ease-in-out
                                            ${isActive
                                                ? 'bg-[#333A48] text-white'
                                                : 'text-gray-300 hover:bg-[#333A48] hover:text-white'}
                                        `}
                                    >
                                        <Icon size={18} />
                                        <span className={`${!isOpen && 'hidden'}`}>{item.name}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Logout Button */}
                <div className="p-4 bg-[#1C2434]">
                    <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-[#333A48] rounded-sm transition-colors"
                    >
                        <LogOut size={18} />
                        <span className={`ml-3 ${!isOpen && 'hidden'}`}>Logout</span>
                    </button>
                </div>
            </div>
        </>
    );
}
