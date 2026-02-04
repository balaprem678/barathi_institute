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
  FaSpinner 
} from 'react-icons/fa';

type FormData = {
  name: string;
  phone: string;
  email: string;
  course: string;
  message: string;
};

const EnquiryForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    course: 'Diploma in Hotel Management',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        course: 'Diploma in Hotel Management',
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
                  
                  <div className="form-group">
                    <label htmlFor="course">Select Course <span>*</span></label>
                    <div className="select-wrapper">
                      <FaBook className="input-icon" />
                      <select
                        id="course"
                        name="course"
                        className="select-form"
                        value={formData.course}
                        onChange={handleChange}
                        required
                      >
                        <option value="Select">Select</option>
                        <option value="Diploma in Hotel Management">Diploma in Hotel Management</option>
                        <option value="Food & Beverage Production">Food & Beverage Production</option>
                        <option value="Food & Beverage Service">Food & Beverage Service</option>
                        <option value="Bakery & Confectionary">Bakery & Confectionary</option>
                        <option value="Special Courses for Girls">Special Courses for Girls</option>
                        <option value="House Keeping Management">House Keeping Management</option>
                        <option value="Front Office & Hotel Management">Front Office & Hotel Management</option>
                        <option value="Diploma Health Assistant">Diploma Health Assistant</option>
                        <option value="Medical Lab Technology">Medical Lab Technology</option>
                        <option value="Health Assistant">Health Assistant</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="form-group textarea-group">
                  <label htmlFor="message">Your Message</label>
                  <div className="input-wrapper">
                    <FaComment className="input-icon" />
                    <textarea
                      id="message"
                      name="message"
                      className="form-input"
                      placeholder="Tell us about your interests, questions, or any specific requirements..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                    />
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