'use client';
import { useState } from 'react';

interface AccordionItemProps {
    title: string;
    content: React.ReactNode;
    isOpen?: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen: initialIsOpen = false }) => {
    const [isOpen, setIsOpen] = useState(initialIsOpen);

    return (
        <div className={`accordion animated out fadeInUp`} style={{ marginBottom: '10px' }}>
            <div className={`acc-btn ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer' }}>
                <p className="title" style={{ color: '#0495F3' }}>{title}</p>
                <div className="toggle-icon">
                    <i className={`plus fa ${isOpen ? 'fa-angle-down' : 'fa-angle-up'}`}></i>
                </div>
            </div>
            <div className={`acc-content ${isOpen ? '' : 'collapsed'}`} style={{ display: isOpen ? 'block' : 'none' }}>
                <div className="text" style={{ padding: '20px' }}>
                    {content}
                </div>
            </div>
        </div>
    );
};
