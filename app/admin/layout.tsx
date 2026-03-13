'use client';
import "../globals.scss";
import "./admin.scss";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { AuthService } from "@/services/authService";
import { NotificationProvider } from '@/context/NotificationContext';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const isLoginPage = pathname === '/admin/login';
    const [authorized, setAuthorized] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const checkAuth = () => {
            const isAuth = AuthService.isAuthenticated();

            if (isLoginPage) {
                if (isAuth) {
                    router.replace('/admin/dashboard');
                } else {
                    setAuthorized(true);
                }
            } else {
                if (!isAuth) {
                    router.replace('/admin/login');
                } else {
                    setAuthorized(true);
                }
            }
        };

        checkAuth();
    }, [pathname, isLoginPage, router]);

    // Prevent flash of unauthorized content
    if (!authorized) {
        return (
            <html lang="en" suppressHydrationWarning>
                <head>
                    <link rel="shortcut icon" href="/images/logo/logo12.png" type="image/png" />
                    <link href="/images/fav-icon/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
                    <link href="/images/fav-icon/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
                    <link href="/images/fav-icon/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
                </head>
                <body className="bg-gray-50 flex items-center justify-center h-screen" suppressHydrationWarning>
                    {/* Optional: Add a loading spinner here */}
                    <div className="text-gray-500">Loading...</div>
                </body>
            </html>
        );
    }

    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="shortcut icon" href="/images/logo/logo12.png" type="image/png" />
                <link href="/images/fav-icon/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
                <link href="/images/fav-icon/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
                <link href="/images/fav-icon/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
                <title>Admin Panel | Bharathi Institute</title>
            </head>
            <body className="bg-gray-50 text-gray-900 font-sans antialiased" suppressHydrationWarning>
                <NotificationProvider>
                    {isLoginPage ? (
                        <div className="flex bg-gray-100 min-h-screen items-center justify-center">
                            {children}
                        </div>
                    ) : (
                        <div className="flex h-screen overflow-hidden">
                            {/* Sidebar */}
                            <AdminSidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

                            <div className="flex flex-col flex-1 overflow-hidden">
                                {/* Header */}
                                <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

                                {/* Main Content */}
                                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
                                    {children}
                                </main>
                            </div>
                        </div>
                    )}
                </NotificationProvider>
            </body>
        </html>
    );
}

