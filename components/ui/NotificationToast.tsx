'use client';
import React, { useEffect, useState } from 'react';
import { X, CheckCircle, AlertTriangle, XCircle, Info } from 'lucide-react';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

interface NotificationToastProps {
    type: NotificationType;
    message: string;
    title?: string;
    onClose: () => void;
}

const NotificationToast: React.FC<NotificationToastProps> = ({ type, message, title, onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger enter animation
        requestAnimationFrame(() => setIsVisible(true));
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        // Wait for exit animation to finish before removing from DOM
        setTimeout(onClose, 300);
    };

    const styles = {
        success: {
            bg: 'bg-white',
            border: 'border-l-4 border-green-500',
            icon: <CheckCircle className="w-6 h-6 text-green-500" />,
            titleColor: 'text-green-800'
        },
        error: {
            bg: 'bg-white',
            border: 'border-l-4 border-red-500',
            icon: <XCircle className="w-6 h-6 text-red-500" />,
            titleColor: 'text-red-800'
        },
        warning: {
            bg: 'bg-white',
            border: 'border-l-4 border-orange-500',
            icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
            titleColor: 'text-orange-800'
        },
        info: {
            bg: 'bg-white',
            border: 'border-l-4 border-blue-500',
            icon: <Info className="w-6 h-6 text-blue-500" />,
            titleColor: 'text-blue-800'
        }
    };

    const style = styles[type];

    return (
        <div
            className={`
                ${style.bg} ${style.border} shadow-lg rounded-r-lg rounded-l-none
                p-4 mb-3 min-w-[320px] max-w-[400px]
                transform transition-all duration-300 ease-in-out
                flex items-start gap-3
                ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
            `}
            role="alert"
        >
            <div className="flex-shrink-0 pt-0.5">
                {style.icon}
            </div>
            <div className="flex-1">
                {title && <h4 className={`font-semibold text-sm ${style.titleColor} mb-1`}>{title}</h4>}
                <p className="text-gray-600 text-sm leading-relaxed">{message}</p>
            </div>
            <button
                onClick={handleClose}
                className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
};

export default NotificationToast;
