'use client';
import "./enqueryform.scss";
import { useState, FormEvent, ChangeEvent } from 'react';
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaBook,
  FaComment,
  FaPaperPlane,
  FaShieldAlt,
  FaSpinner,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCalendarAlt,
  FaBriefcase
} from 'react-icons/fa';

type FormData = {
  name: string;
  phone: string;
  alternatePhone: string;
  email: string;
  city: string;
  qualification: string;
  yearOfPassing: string;
  course: string;
  occupation: string;
  message: string;
};

import { useNotification } from '@/context/NotificationContext';
import { useFormPersistence } from '@/context/useFormPersistence';

const EnquiryForm = () => {
  const { showNotification } = useNotification();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    alternatePhone: '',
    email: '',
    city: '',
    qualification: '',
    yearOfPassing: '',
    course: '',
    occupation: '',
    message: ''
  });

  // Persist user details
  useFormPersistence(formData, setFormData, ['name', 'phone', 'email', 'city', 'qualification'], { location: 'city' });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Real API call
    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit enquiry');
      }
    } catch (error) {
      console.error('Submission error:', error);
      showNotification('error', 'Something went wrong. Please try again.');
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    showNotification('success', 'Thank you! Your enquiry has been submitted successfully.');

    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        alternatePhone: '',
        email: '',
        city: '',
        qualification: '',
        yearOfPassing: '',
        course: '',
        occupation: '',
        message: ''
      });
    }, 5000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="home-enquiryform home_page_enquiry_form">
      {/* Floating decorative elements */}
      <div className="floating-element"></div>
      <div className="floating-element"></div>
      <div className="floating-element"></div>

      <div className="container">
        <div className="section-title">
          <h3>Get Course Information</h3>
          <p>Fill out the form below and our team will get back to you within 24 hours with detailed course information.</p>
        </div>

        <div className="form-container">
          <div className="enquiry-card">
            {!isSubmitted ? (
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name <span>*</span></label>
                    <div className="input-wrapper">
                      <FaUser className="input-icon" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-input"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number <span>*</span></label>
                    <div className="input-wrapper">
                      <FaPhone className="input-icon" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-input"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address <span>*</span></label>
                    <div className="input-wrapper">
                      <FaEnvelope className="input-icon" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-input"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                </div>
                <button
                  type="submit"
                  className={`enquiry-btn ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="btn-icon spinning" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="btn-icon" />
                      Send Enquiry Now
                    </>
                  )}
                </button>

                <div className="form-footer">
                  <p className="privacy-note">
                    <FaShieldAlt className="shield-icon" />
                    Your information is secure. By submitting, you agree to our{' '}
                    <a href="/privacy-policy">Privacy Policy</a>.
                  </p>
                </div>
              </form>
            ) : (
              <div className="success-message visible">
                <div className="success-icon">✅</div>
                <h4>Enquiry Submitted Successfully!</h4>
                <p>
                  Thank you for your interest. Our team will contact you within 24 hours
                  with detailed course information and guidance.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquiryForm;