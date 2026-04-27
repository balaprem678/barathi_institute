'use client';
import { validateEmail, validateIndianPhone } from '@/lib/validation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import './register.scss';
import { useNotification } from '@/context/NotificationContext';
import { useFormPersistence } from '@/context/useFormPersistence';
import { useMemo, useRef } from 'react';

export default function Register() {
    const { showNotification } = useNotification();
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        qualification: '',
        yearOfPassing: '',
        course: '',
        message: '',
        captcha: '',
        file: null as File | null
    });

    // We map 'city' from storage to 'location' in the registration form
    // And persist other shared fields
    const fieldsToPersist = useMemo(() => ['name', 'email', 'phone', 'location', 'qualification', 'yearOfPassing', 'course', 'message'], []);
    useFormPersistence(formData, setFormData, fieldsToPersist, { 
        mapping: { city: 'location' },
        remoteSyncUrl: '/api/students'
    });

    const courseCategories = {
        degree: [
            { value: "B.Voc Hotel Management", label: "B.Voc in Hotel Management - 3 Years" },
            { value: "B.Voc Medical Lab Technology", label: "B.Voc in Medical Lab Technology - 3 Years" },
            { value: "B.Voc Emergency Care & Trauma Care Technology", label: "B.Voc in Emergency Care & Trauma Care Technology - 3 Years" },
            { value: "B.Voc Operation Theatre Technology", label: "B.Voc in Operation Theatre Technology - 3 Years" },
            { value: "B.Voc Hospital Administration", label: "B.Voc in Hospital Administration - 3 Years" },
            { value: "B.Sc Hotel Management", label: "B.Sc Hotel Management - 3 Years" },
        ],
        diploma: [
            { value: "Diploma in Hotel Management", label: "Diploma in Hotel Management" },
            { value: "Diploma in Food and Beverage Production", label: "Diploma in Food and Beverage Production" },
            { value: "Diploma in Food and Beverage Service", label: "Diploma in Food and Beverage Service" },
            { value: "Diploma in House Keeping Management", label: "Diploma in House Keeping Management" },
            { value: "Diploma in Front Office Management", label: "Diploma in Front Office Management" },
            { value: "Diploma in Bakery and Confectionery", label: "Diploma in Bakery and Confectionery" },
            { value: "Health Care Assistant", label: "Health Care Assistant" },
            { value: "Diploma in Medical Lab Technician", label: "Diploma in Medical Lab Technician" },
        ],
        certificate: [
            { value: "Food Production", label: "Food Production" },
            { value: "Food and Beverage Services", label: "Food and Beverage Services" },
            { value: "House Keeping Management", label: "House Keeping Management" },
            { value: "Front office and Hotel Operational Management", label: "Front office and Hotel Operational Management" },
            { value: "Certification in Female patient Care Assistant", label: "Certification in Female patient Care Assistant" },
            { value: "Certification in Medical Lab Technician", label: "Certification in Medical Lab Technician" },
            { value: "Certificate in Optometry", label: "Certificate in Optometry" },
            { value: "Certificate in Hospital Administration", label: "Certificate in Hospital Administration" },
            { value: "Certificate in Operation Theatre Assistant", label: "Certificate in Operation Theatre Assistant" },
            { value: "Certificate in Health Assistant", label: "Certificate in Health Assistant" },
        ]
    };

    const coursesByQualification: { [key: string]: { value: string; label: string }[] } = {
        "12th - Degree / Diploma / Certificate Courses": [
            ...courseCategories.degree,
            ...courseCategories.diploma,
            ...courseCategories.certificate
        ],
        "ITI - Degree / Diploma / Certificate Courses": [
            ...courseCategories.degree,
            ...courseCategories.diploma,
            ...courseCategories.certificate
        ],
        "10th - Diploma / Certificate Courses": [
            ...courseCategories.diploma,
            ...courseCategories.certificate
        ],
        "8th - Certificate Courses": [
            ...courseCategories.certificate
        ]
    };

    const [random1, setRandom1] = useState(0);
    const [random2, setRandom2] = useState(0);

    // Initial load and hydration fix
    useEffect(() => {
        setRandom1(Math.floor(Math.random() * 15) + 1);
        setRandom2(Math.floor(Math.random() * 15) + 1);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
            // Reset course if qualification changes
            ...(name === 'qualification' ? { course: '' } : {})
        }));
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

        if (!formData.qualification || formData.qualification === 'Qualification') {
            showNotification('error', 'Please select your qualification');
            return;
        }

        if (!formData.course || formData.course === '0') {
            showNotification('error', 'Please select a course');
            return;
        }

        // Email and Phone Validation
        const trimmedEmail = formData.email.trim();
        const trimmedPhone = formData.phone.trim();

        if (!formData.name.trim()) {
            showNotification('error', 'Please enter your full name');
            return;
        }
        if (!trimmedEmail) {
            showNotification('error', 'Please enter your email address');
            return;
        }
        if (!validateEmail(trimmedEmail)) {
            showNotification('error', 'Please provide a valid email address');
            return;
        }
        if (!trimmedPhone) {
            showNotification('error', 'Please enter your phone number');
            return;
        }
        if (!validateIndianPhone(trimmedPhone)) {
            showNotification('error', 'Please provide a valid 10-digit Indian phone number');
            return;
        }

        const submitData = new FormData();
        submitData.append('name', formData.name);
        submitData.append('email', formData.email);
        submitData.append('phone', formData.phone);
        submitData.append('qualification', formData.qualification);
        submitData.append('yearOfPassing', formData.yearOfPassing);
        submitData.append('location', formData.location);
        submitData.append('course', formData.course);
        submitData.append('message', formData.message);

        if (formData.file) {
            submitData.append('file', formData.file);
        }

        try {
            const res = await fetch('/api/students', {
                method: 'POST',
                body: submitData,
            });
            // Also append isSubmit to submitData
            submitData.append('isSubmit', 'true');

            if (res.ok) {
                showNotification('success', 'Form submitted successfully!');
                setFormData({
                    name: '', email: '', phone: '', qualification: '', yearOfPassing: '', course: '', message: '', location: '', captcha: '', file: null
                });
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            } else {
                const errorData = await res.json();
                showNotification('error', errorData.message || 'Failed to submit form. Please try again.');
            }
        } catch (error: any) {
            console.error('Submission error:', error);
            showNotification('error', error.message || 'An error occurred. Please try again.');
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
                                        {/* Year of Passing */}
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <input type="text" name="yearOfPassing" className="form-control" value={formData.yearOfPassing} onChange={handleChange} placeholder="Year Of Passing" />
                                            </div>
                                        </div>
                                        {/* Location */}
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <input type="text" name="location" className="form-control" value={formData.location} onChange={handleChange} placeholder="Location" />
                                            </div>
                                        </div>
                                        {/* Qualification */}
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <div className="form-group">
                                                <div className="select-box">
                                                    <select className="form-control" name="qualification" value={formData.qualification} onChange={handleChange} style={{ width: '100%' }}>
                                                        <option value="Qualification">Qualification</option>
                                                        <option value="12th - Degree / Diploma / Certificate Courses">12th - Degree / Diploma / Certificate Courses</option>
                                                        <option value="ITI - Degree / Diploma / Certificate Courses">ITI - Degree / Diploma / Certificate Courses </option>
                                                        <option value="10th - Diploma / Certificate Courses">10th - Diploma / Certificate Courses</option>
                                                        <option value="8th - Certificate Courses">8th - Certificate Courses</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Select Course (Dynamic based on Qualification) */}
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <div className="select-box">
                                                    <select className="form-control" name="course" value={formData.course} onChange={handleChange} style={{ width: '100%' }}>
                                                        <option value="">Select Courses</option>
                                                        {formData.qualification && coursesByQualification[formData.qualification]?.map((c) => (
                                                            <option key={c.value} value={c.value}>{c.label}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Upload Marksheet */}
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                            <div className="form-group">
                                                <label htmlFor="fileUpload">Upload Marksheet (Optional):</label>
                                                <input type="file" name="file" id="fileUpload" className="form-control" onChange={handleFileChange} ref={fileInputRef} />
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
                        <div className="col-md-4 col-sm-12">
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
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/paramedical">Health Care Assistant</Link> </li>
                                    <li><i className="fa fa-certificate"></i><Link href="/courses/paramedical">Medical Lab Technician</Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>          
        </div>
    );
}
