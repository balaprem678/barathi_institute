"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, Mail, Phone, User, Map, Send, Book, MessageSquare, Calendar, BookOpen, GraduationCap, } from 'lucide-react';
import './popupmodal.scss';
import { useNotification } from '@/context/NotificationContext';
import { useFormPersistence } from '@/context/useFormPersistence';

const PopupModal = () => {
    const { showNotification } = useNotification();
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        alternatePhone: '',
        city: '',
        qualification: '',
        yearOfPassing: '',
        course: '',
        occupation: '',
        message: '',
        agree: false
    });

    // Persist shared fields with auto-save
    useFormPersistence(formData, setFormData, ['name', 'email', 'phone', 'city', 'qualification', 'alternatePhone', 'yearOfPassing', 'course', 'occupation', 'message'], { 
        mapping: { location: 'city' },
        remoteSyncUrl: '/api/enquiries'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        // Close on Escape key
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsVisible(false);
        };

        window.addEventListener('keydown', handleEscape);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('keydown', handleEscape);
        };
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.agree) {
            showNotification('warning', 'Please agree to the terms and conditions');
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/enquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, isSubmit: true }),
            });

            if (response.ok) {
                showNotification('success', 'Thank you! Your enquiry has been submitted successfully.');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    alternatePhone: '',
                    city: '',
                    qualification: '',
                    yearOfPassing: '',
                    course: '',
                    occupation: '',
                    message: '',
                    agree: false
                });
                handleClose();
            }
        } catch (error) {
            showNotification('error', 'An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isVisible) return null;

    return (
        <div className="modal-overlay enquiry_form" onClick={handleClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                    {/* Header */}
                    <div className="modal-header p-3">
                        <h2 className="institute-name">Enquiry Form</h2>
                        <button
                            className="close-button"
                            onClick={handleClose}
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="enquiry-form p-3">
                    <div className="form-body px-2">
                        {/* Name Field */}
                        <div className="form-field-group flex-1">
                            <div className="field-label">
                                <User size={18} className="field-icon" />
                                <label htmlFor="name" className="field-label-text">
                                    Full Name
                                    <span className="required-star">*</span>
                                </label>
                            </div>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="form-field"
                                placeholder="John Smith"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                            <div className="field-bottom-space"></div>
                        </div>

                        {/* Email Field */}
                        <div className="form-field-group flex-1">
                            <div className="field-label">
                                <Mail size={18} className="field-icon" />
                                <label htmlFor="email" className="field-label-text">
                                    Email Address
                                    <span className="required-star">*</span>
                                </label>
                            </div>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-field"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                            <div className="field-bottom-space"></div>
                        </div>
                        {/* Phone Field */}
                        <div className="form-field-group flex-1">
                            <div className="field-label">
                                <Phone size={18} className="field-icon" />
                                <label htmlFor="phone" className="field-label-text">
                                    Phone Number
                                    <span className="required-star">*</span>
                                </label>
                            </div>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                className="form-field"
                                placeholder="+91 98765 43210"
                                value={formData.phone}
                                onChange={handleInputChange}
                                required
                            />
                            <div className="field-bottom-space"></div>
                        </div>

                        {/* Consent Section */}
                        <div className="consent-section">
                            <div className="consent-checkbox">
                                <input
                                    type="checkbox"
                                    id="agreeCheckbox"
                                    name="agree"
                                    checked={formData.agree}
                                    onChange={handleInputChange}
                                    className="checkbox-input"
                                    required
                                />
                                <label htmlFor="agreeCheckbox" className="checkbox-label">
                                    I authorize Bharathi Institute to contact me via phone, email, and SMS with
                                    updates about courses, admissions, and other relevant information.
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="modal-footer">
                        <div className="footer-actions">
                            <button
                                type="submit"
                                className="submit-button"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="spinner"></div>
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Submit Enquiry
                                    </>
                                )}
                            </button>
                            <button
                                type="button"
                                className="cancel-button"
                                onClick={handleClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PopupModal;