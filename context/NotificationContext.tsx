'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NotificationToast, { NotificationType } from '@/components/ui/NotificationToast';

export interface Notification {
    id: string;
    type: NotificationType;
    message: string;
    title?: string;
}

interface NotificationContextType {
    showNotification: (type: NotificationType, message: string, title?: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const showNotification = useCallback((type: NotificationType, message: string, title?: string) => {
        const id = uuidv4();
        setNotifications((prev) => [...prev, { id, type, message, title }]);

        // Auto dismiss after 5 seconds
        setTimeout(() => {
            removeNotification(id);
        }, 5000);
    }, []);

    const removeNotification = useCallback((id: string) => {
        setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    }, []);

    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2 pointer-events-none">
                {notifications.map((notification) => (
                    <div key={notification.id} className="pointer-events-auto">
                        <NotificationToast
                            type={notification.type}
                            message={notification.message}
                            title={notification.title}
                            onClose={() => removeNotification(notification.id)}
                        />
                    </div>
                ))}
            </div>
        </NotificationContext.Provider>
    );
};
