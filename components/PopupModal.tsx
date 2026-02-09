"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, Mail, Phone, User, Send } from 'lucide-react';
import './popupmodal.scss';

const PopupModal = () => {
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
            alert('Please agree to the terms and conditions');
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch('/api/enquiries', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Thank you! Your enquiry has been submitted successfully.');
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
            alert('An error occurred. Please try again.');
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
                        <div className="form-field-group">
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
                        <div className="form-field-group">
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
                        <div className="form-field-group">
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

                        {/* Alternate Phone */}
                        <div className="form-field-group">
                            <div className="field-label">
                                <Phone size={18} className="field-icon" />
                                <label htmlFor="alternatePhone" className="field-label-text">
                                    Alternate / WhatsApp Number
                                    <span className="required-star">*</span>
                                </label>
                            </div>
                            <input
                                type="tel"
                                id="alternatePhone"
                                name="alternatePhone"
                                className="form-field"
                                placeholder="Alternate Number"
                                value={formData.alternatePhone}
                                onChange={handleInputChange}
                                required
                            />
                            <div className="field-bottom-space"></div>
                        </div>

                        {/* City */}
                        <div className="form-field-group">
                            <div className="field-label">
                                <label htmlFor="city" className="field-label-text">
                                    City / Location
                                    <span className="required-star">*</span>
                                </label>
                            </div>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                className="form-field"
                                placeholder="Your City"
                                value={formData.city}
                                onChange={handleInputChange}
                                required
                            />
                            <div className="field-bottom-space"></div>
                        </div>

                        {/* Course Selection */}
                        <div className="form-field-group">
                            <div className="field-label">
                                <label htmlFor="course" className="field-label-text">
                                    Course Interested In
                                    <span className="required-star">*</span>
                                </label>
                            </div>
                            <input
                                type="text"
                                id="course"
                                name="course"
                                className="form-field"
                                placeholder="Enter course name"
                                value={formData.course}
                                onChange={handleInputChange}
                                required
                            />
                            <div className="field-bottom-space"></div>
                        </div>

                        {/* Qualification & Year of Passing */}
                        <div className="flex gap-2">
                            <div className="form-field-group flex-1">
                                <div className="field-label">
                                    <label htmlFor="qualification" className="field-label-text">
                                        Qualification
                                        <span className="required-star">*</span>
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    id="qualification"
                                    name="qualification"
                                    className="form-field"
                                    placeholder="Qualification"
                                    value={formData.qualification}
                                    onChange={handleInputChange}
                                    required
                                />
                                <div className="field-bottom-space"></div>
                            </div>
                            <div className="form-field-group flex-1">
                                <div className="field-label">
                                    <label htmlFor="yearOfPassing" className="field-label-text">
                                        Year
                                        <span className="required-star">*</span>
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    id="yearOfPassing"
                                    name="yearOfPassing"
                                    className="form-field"
                                    placeholder="Year"
                                    value={formData.yearOfPassing}
                                    onChange={handleInputChange}
                                    required
                                />
                                <div className="field-bottom-space"></div>
                            </div>
                        </div>

                        {/* Occupation */}
                        <div className="form-field-group">
                            <div className="field-label">
                                <label htmlFor="occupation" className="field-label-text">
                                    Occupation (Optional)
                                </label>
                            </div>
                            <input
                                type="text"
                                id="occupation"
                                name="occupation"
                                className="form-field"
                                placeholder="Current Occupation"
                                value={formData.occupation}
                                onChange={handleInputChange}
                            />
                            <div className="field-bottom-space"></div>
                        </div>

                        {/* Message */}
                        <div className="form-field-group">
                            <div className="field-label">
                                <label htmlFor="message" className="field-label-text">
                                    Message
                                </label>
                            </div>
                            <textarea
                                id="message"
                                name="message"
                                className="form-field"
                                placeholder="Your message..."
                                value={formData.message}
                                onChange={handleInputChange as any}
                                rows={2}
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