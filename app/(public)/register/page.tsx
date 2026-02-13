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
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} placeholder=" Full Name *" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <input type="email" name="email" className="form-control required email" value={formData.email} onChange={handleChange} placeholder="Mail address*" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} placeholder="Mobile No*" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <input type="text" name="qualification" className="form-control" value={formData.qualification} onChange={handleChange} placeholder="Qualification *" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <input type="text" name="phone" className="form-control" value={formData.phone} onChange={handleChange} placeholder="Year Of Passing*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <input type="text" name="name" className="form-control" value={formData.phone} onChange={handleChange} placeholder=" Qualification*" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <input type="text" name="name" className="form-control" value={formData.phone} onChange={handleChange} placeholder=" Location*" required />
                                            </div>
                                        </div>

                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <div className="select-box">
                                                    <select className="form-control" name="subject" value={formData.subject} onChange={handleChange} style={{ width: '100%' }}>
                                                        <option value="0">Subject</option>
                                                        <option value="Diploma in Hotel Management">Diploma in Hotel Management</option>
                                                        <option value="Food and Beverage Production">Food and Beverage Production</option>
                                                        <option value="Food and Beverage Service">Food and Beverage Service</option>
                                                        <option value="House Keeping Management">House Keeping Management</option>
                                                        <option value="Front Office Management">Front Office Management</option>
                                                        <option value="Bakery and Confectionery">Bakery and Confectionery</option>
                                                        <option value="Diploma in Nursing Assistant">Diploma in Nursing Assistant</option>
                                                        <option value="Medical Lab Technician">Medical Lab Technician</option>
                                                        <option value="Health Assistant">Health Assistant</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label htmlFor="fileUpload">Upload Marksheet:</label>
                                                <input type="file" name="file" id="fileUpload" className="form-control" required onChange={handleFileChange} />
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <textarea name="message" className="form-control textarea required" placeholder="Ask a Question....." value={formData.message} onChange={handleChange}></textarea>
                                            </div>
                                        </div>
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
