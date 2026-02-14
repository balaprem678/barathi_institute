"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, Mail, Phone, User, Map, Send, Book, MessageSquare, Calendar, BookOpen, GraduationCap, } from 'lucide-react';
import './popupmodal.scss';
import { useNotification } from '@/context/NotificationContext';

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
                body: JSON.stringify(formData),
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

                        {/* City */}
                        <div className="form-field-group">
                            <div className="field-label">
                                <Map size={18} className="field-icon" />
                                <label htmlFor="city" className="field-label-text">
                                    Location
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

                        {/* Courses Intrested In */}
                        <div className="form-field-group">
                            <div className="field-label">
                                <GraduationCap size={18} className="field-icon" />
                                <label htmlFor="course" className="field-label-text">
                                    Courses Intrested In*
                                    <span className="required-star">*</span>
                                </label>
                            </div>
                            <select
                                id="course"
                                name="course"
                                className="form-field"
                                value={formData.course}
                                onChange={handleInputChange as any}
                                required
                            >
                                <option value="Degree">Degree</option>
                                <option value="Diploma">Diploma</option>
                                <option value="Certificate Courses">Certificate Courses</option>

                            </select>
                            <div className="field-bottom-space"></div>
                        </div>
                        {/* Select Courses */}
                        <div className="form-field-group">
                            <div className="field-label">
                                <Book size={18} className="field-icon" />
                                <label htmlFor="course" className="field-label-text">
                                    Select Courses
                                    <span className="required-star">*</span>
                                </label>
                            </div>
                            <select
                                id="course"
                                name="course"
                                className="form-field"
                                value={formData.course}
                                onChange={handleInputChange as any}
                                required
                            >
                                <option value="">Select Course</option>

                                {/* After 12th */}
                                <option value="B.Sc Hotel Management">B.Sc Hotel Management - 3 Years</option>
                                <option value="B.Voc Hotel Management">B.Voc in Hotel Management - 3 Years</option>
                                <option value="B.Voc Medical Lab Technology">B.Voc in Medical Lab Technology - 3 Years</option>
                                <option value="B.Voc Emergency Care & Trauma Care Technology">B.Voc in Emergency Care & Trauma Care Technology - 3 Years</option>
                                <option value="B.Voc Operation Theatre Technology">B.Voc in Operation Theatre Technology - 3 Years</option>
                                <option value="B.Voc Hospital Administration">B.Voc in Hospital Administration - 3 Years</option>

                                {/* 10th Pass / Fail  */}
                                <option value="Diploma in Hotel Management">Diploma in Hotel Management</option>
                                <option value="Diploma in Food and Beverage Production">Diploma in Food and Beverage Production</option>
                                <option value="Diploma in Food and Beverage Service">Diploma in Food and Beverage Service</option>
                                <option value="Diploma in House Keeping Management">Diploma in House Keeping Management</option>
                                <option value="Diploma in Front Office Management">Diploma in Front Office Management</option>
                                <option value="Diploma in Bakery and Confectionery">Diploma in Bakery and Confectionery</option>
                                <option value="Diploma in Nursing Assistant">Diploma in Nursing Assistant</option>
                                <option value="Diploma in Medical Lab Technician">Diploma in Medical Lab Technician</option>
                                <option value="Diploma in Health Assistant">Diploma in Health Assistant</option>
                            </select>
                            <div className="field-bottom-space"></div>
                        </div>

                        {/* Qualification & Year of Passing */}
                        <div className="flex gap-2">
                            <div className="form-field-group flex-1">
                                <div className="field-label">
                                    <BookOpen size={18} className="field-icon" />
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
                                    <Calendar size={18} className="field-icon" />
                                    <label htmlFor="yearOfPassing" className="field-label-text">
                                        Year
                                        <span className="required-star">*</span>
                                    </label>
                                </div>
                                {/* <input
                                    type="text"
                                    id="yearOfPassing"
                                    name="yearOfPassing"
                                    className="form-field"
                                    placeholder="Year"
                                    value={formData.yearOfPassing}
                                    onChange={handleInputChange}
                                    required
                                /> */}
                                <input type="number" name="year" id="year" min="1" max="3" placeholder="Enter Year" required />

                                <div className="field-bottom-space"></div>
                            </div>
                        </div>


                        {/* Message */}
                        <div className="form-field-group">
                            <div className="field-label">
                                <MessageSquare size={18} className="field-icon" />
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