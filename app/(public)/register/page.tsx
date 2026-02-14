'use client';
import Link from 'next/link';
import { useState } from 'react';
import './register.scss';
import { useNotification } from '@/context/NotificationContext';

export default function Register() {
    const { showNotification } = useNotification();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        qualification: '',
        subject: '0',
        message: '',
        captcha: '',
        file: null as File | null
    });

    const [random1] = useState(Math.floor(Math.random() * 15) + 1);
    const [random2] = useState(Math.floor(Math.random() * 15) + 1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFormData(prev => ({ ...prev, file: e.target.files![0] }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (parseInt(formData.captcha) !== random1 + random2) {
            showNotification('error', 'Incorrect Security Code');
            return;
        }

        const submitData = new FormData();
        submitData.append('name', formData.name);
        submitData.append('email', formData.email);
        submitData.append('phone', formData.phone);
        submitData.append('qualification', formData.qualification);
        // Map 'subject' to 'course' as per Schema/API expectation
        submitData.append('course', formData.subject);
        submitData.append('message', formData.message);

        if (formData.file) {
            submitData.append('file', formData.file);
        }

        try {
            const res = await fetch('/api/students', {
                method: 'POST',
                body: submitData,
                // Note: Content-Type header is not set manually for FormData, browser does it with boundary
            });

            if (res.ok) {
                showNotification('success', 'Form submitted successfully!');
                // Reset form or redirect
                setFormData({
                    name: '', email: '', phone: '', qualification: '', subject: '0', message: '', captcha: '', file: null
                });
            } else {
                showNotification('error', 'Failed to submit form. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            showNotification('error', 'An error occurred. Please try again.');
        }
    };

    return (
        <div className="register_page">
            <div className="admission_register">
                <div className="container">
                    <h3 className='page_title'>Online Application</h3>
                </div>
            </div>

            <section className="default-section sec-padd">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-12">
                            <div className="section-title">
                                <h3>Account Details :</h3>
                                <span className="decor"></span>
                                <div className="account_details" style={{ marginTop: '30px' }}>
                                    <p style={{ marginTop: 0 }}>A/C No : 0936201003073</p>
                                    <p>IFSC Code : CNRB0000936</p>
                                    <p>Name : Bharathi catering industrial school</p>
                                    <p>Branch : Ambattur</p>
                                    <p>Gpay No : +919444320052</p>
                                </div>
                            </div>
                            <div className="section-title" style={{ marginTop: '30px' }}>
                                <h3>Admission Form</h3>
                                <span className="decor"></span>
                                <p> you should Send us message , our teams to enhance action with your needs . </p><br />
                            </div>
                            <div className="default-form-area">
                                <form id="commentForm" className="default-form" onSubmit={handleSubmit}>
                                    <div className="row clearfix">
                                        {/* Full Name */}
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} placeholder=" Full Name *" required />
                                            </div>
                                        </div>
                                        {/* Mobile Number */}
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} placeholder="Mobile No*" required />
                                            </div>
                                        </div>
                                        {/* Email Address */}
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <input type="email" name="email" className="form-control required email" value={formData.email} onChange={handleChange} placeholder="Mail address" required />
                                            </div>
                                        </div>
                                        {/* Qualification */}
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <div className="select-box">
                                                    <select className="form-control" name="subject" value={formData.subject} onChange={handleChange} style={{ width: '100%' }}>
                                                        <option value="0">Qualification*</option>
                                                        <option value="12th">12th</option>
                                                        <option value="10th">10th</option>
                                                        <option value="ITI">ITI</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Year of Passing */}
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} placeholder="Year Of Passing*" />
                                            </div>
                                        </div>
                                        {/* Location */}
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <input type="text" name="name" className="form-control" value={formData.phone} onChange={handleChange} placeholder=" Location*" required />
                                            </div>
                                        </div>
                                        {/* Courses Intrested In */}
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <div className="select-box">
                                                    <select className="form-control" name="subject" value={formData.subject} onChange={handleChange} style={{ width: '100%' }}>
                                                        <option value="Qualification">Qualification*</option>
                                                        <option value="ITI">ITI</option>
                                                        <option value="12th">12th</option>
                                                        <option value="10th">10th</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Courses Intrested In */}
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <div className="select-box">
                                                    <select className="form-control" name="subject" value={formData.subject} onChange={handleChange} style={{ width: '100%' }}>
                                                        <option value="0">Courses Intrested In*</option>
                                                        <option value="Degree">Degree</option>
                                                        <option value="Diploma">Diploma</option>
                                                        <option value="Certificate Courses">Certificate Courses</option>

                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Select Courses */}
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <div className="select-box">
                                                    <select className="form-control" name="subject" value={formData.subject} onChange={handleChange} style={{ width: '100%' }}>
                                                        <option value="0">Select Courses</option>
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
                                                </div>
                                            </div>
                                        </div>
                                        {/* Upload Marksheet */}
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label htmlFor="fileUpload">Upload Marksheet:</label>
                                                <input type="file" name="file" id="fileUpload" className="form-control" required onChange={handleFileChange} />
                                            </div>
                                        </div>
                                        {/* Message Box */}
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <textarea name="message" className="form-control textarea required" placeholder="Ask a Question....." value={formData.message} onChange={handleChange}></textarea>
                                            </div>
                                        </div>
                                        {/* Captcha */}
                                        <div className="col-md-6 col-sm-6 col-xs-6">
                                            <div className="form-group">
                                                Add Two Values {random1} + {random2} =
                                                <input name="captcha" type="text" size={2} value={formData.captcha} onChange={handleChange} style={{ marginLeft: '10px', width: '50px', display: 'inline-block' }} />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-6">
                                            <div className="form-group center">
                                                <br />
                                                <button className="thm-btn style-2" type="submit" data-loading-text="Please wait...">submit now <i className="fa fa-sort-desc"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <br /><br />
                        </div>
                        <div className="col-md-1 col-sm-12"></div>
                        <div className="col-md-3 col-sm-12">
                            <div className="default-sidebar">
                                <div className="section-title">
                                    <h3> Hotel Management </h3>
                                    <span className="decor"></span>
                                </div><br />
                                <ul className="contact-info reg">
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma"> Diploma in Hotel Management</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Food and Beverage Production</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Food and Beverage Service</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">House Keeping Management</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Front Office Management</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Bakery and Confectionery</Link> </li>
                                </ul>

                                <div className="section-title">
                                    <h3> Paramedical Course</h3>
                                    <span className="decor"></span>
                                </div><br />
                                <ul className="contact-info reg">
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Diploma in Nursing Assistant</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Medical Lab Technician</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/diploma">Health Assistant</Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
