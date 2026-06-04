'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, Phone } from 'lucide-react';
import styles from './chatbot.module.css';

interface Message {
    id: string;
    text?: string | React.ReactNode;
    sender: 'bot' | 'user';
    type: 'text' | 'options' | 'end';
    options?: string[];
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputValue, setInputValue] = useState('');
    const [currentStep, setCurrentStep] = useState(0);
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [userData, setUserData] = useState({
        name: '',
        qualification: '',
        courseType: '',
        course: '',
        branch: '',
        phone: ''
    });
    
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Initial greeting
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setMessages([
                {
                    id: Date.now().toString(),
                    text: 'Hello! Welcome to Bharathi Institutes Admissions. May I know your name?',
                    sender: 'bot',
                    type: 'text'
                }
            ]);
        }
    }, [isOpen, messages.length]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const addMessage = (msg: Message) => {
        setMessages(prev => [...prev, msg]);
    };

    const handleSend = () => {
        if (!inputValue.trim()) return;

        const val = inputValue.trim();
        addMessage({ id: Date.now().toString() + 'u', text: val, sender: 'user', type: 'text' });
        setInputValue('');

        processNextStep(val);
    };

    const handleOptionSelect = (option: string) => {
        addMessage({ id: Date.now().toString() + 'u', text: option, sender: 'user', type: 'text' });
        processNextStep(option);
    };

    const processNextStep = async (input: string) => {
        if (currentStep === 0) {
            setUserData(prev => ({ ...prev, name: input }));
            setTimeout(() => {
                addMessage({
                    id: Date.now().toString(),
                    text: `Nice to meet you, ${input}! 👋 What is your highest qualification?`,
                    sender: 'bot',
                    type: 'options',
                    options: ['12th Pass', 'ITI Pass', '10th Pass', '8th Pass']
                });
                setCurrentStep(1);
            }, 500);
        }
        else if (currentStep === 1) {
            setUserData(prev => ({ ...prev, qualification: input }));
            setTimeout(() => {
                addMessage({
                    id: Date.now().toString(),
                    text: (
                        <div>
                            <p>Here's what you're eligible for:</p>
                            <div className={styles.infoBox}>
                                ℹ️ You are eligible for Degree, Diploma & Certificate courses.
                            </div>
                            <p>Which type of course would you like to pursue?</p>
                        </div>
                    ),
                    sender: 'bot',
                    type: 'options',
                    options: ['Degree', 'Diploma', 'Certificate']
                });
                setCurrentStep(2);
            }, 500);
        }
        else if (currentStep === 2) {
            setUserData(prev => ({ ...prev, courseType: input }));
            setTimeout(() => {
                addMessage({
                    id: Date.now().toString(),
                    text: `Which ${input} course are you interested in?`,
                    sender: 'bot',
                    type: 'options',
                    options: [
                        'B.Voc in Hotel Management - 3 Years',
                        'B.Voc in Medical Lab Technology - 3 Years',
                        'B.Voc in Emergency Care & Trauma Care Technology - 3 Years',
                        'B.Voc in Operation Theatre Technology - 3 Years',
                        'B.Voc in Hospital Administration - 3 Years',
                        'B.Sc Hotel Management - 3 Years'
                    ]
                });
                setCurrentStep(3);
            }, 500);
        }
        else if (currentStep === 3) {
            setUserData(prev => ({ ...prev, course: input }));
            setTimeout(() => {
                addMessage({
                    id: Date.now().toString(),
                    text: 'Which branch would you like to join? We have 18 branches across Tamil Nadu.',
                    sender: 'bot',
                    type: 'options',
                    options: [
                        'Tambaram Branch', 'Ambattur Branch', 'Ranipet Branch', 
                        'Ambur Branch', 'Villupuram Branch', 'Madurai Branch',
                        'Karaikudi Branch', 'Cuddalore Branch', 'Tirunelveli Branch',
                        'Ariyalur Branch', 'Vellore Branch', 'Tiruvannamalai Branch',
                        'Kanchipuram Branch', 'Kallakurichi Branch', 'Dindigul Branch',
                        'Salem Branch', 'Tiruchirappalli Branch', 'Broadway Branch'
                    ]
                });
                setCurrentStep(4);
            }, 500);
        }
        else if (currentStep === 4) {
            setUserData(prev => ({ ...prev, branch: input }));
            setTimeout(() => {
                addMessage({
                    id: Date.now().toString(),
                    text: (
                        <div>
                            <div className={styles.pinBox}>
                                <p className={styles.pinTitle}>📍 {input}</p>
                                <p style={{color: '#6c757d'}}>Our representative will share exact location details shortly.</p>
                            </div>
                            <p>Almost done! 📞 Please enter your contact number so our team can reach you.</p>
                        </div>
                    ),
                    sender: 'bot',
                    type: 'text'
                });
                setCurrentStep(5);
            }, 500);
        }
        else if (currentStep === 5) {
            const finalUserData = { ...userData, phone: input };
            setUserData(finalUserData);
            
            try {
                const res = await fetch('/api/chatbot-leads', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(finalUserData)
                });
                
                const data = await res.json();
                if (data.whatsappNumber) {
                    setWhatsappNumber(data.whatsappNumber);
                }

                setTimeout(() => {
                    addMessage({
                        id: Date.now().toString(),
                        text: 'Thank you for your interest! Click the button below to message us directly on WhatsApp to finalize your admission process.',
                        sender: 'bot',
                        type: 'end'
                    });
                    setCurrentStep(6);
                }, 800);
            } catch (error) {
                console.error("Failed to save lead", error);
            }
        }
    };

    const handleWhatsAppRedirect = () => {
        const text = `Hello, I am ${userData.name}. I am interested in ${userData.course} at the ${userData.branch}. My qualification is ${userData.qualification}. My contact number is ${userData.phone}.`;
        const encodedText = encodeURIComponent(text);
        const number = whatsappNumber.replace(/[^0-9]/g, '') || '919345240003';
        window.open(`https://wa.me/${number}?text=${encodedText}`, '_blank');
    };

    return (
        <div className={styles.chatbotWrapper}>
            {isOpen && (
                <div className={styles.chatWindow}>
                    {/* Header */}
                    <div className={styles.header}>
                        <div className={styles.headerInfo}>
                            <div className={styles.avatar}>
                                <Bot size={22} color="#fff" />
                            </div>
                            <div>
                                <h3 className={styles.title}>EduBot</h3>
                                <div className={styles.subtitle}>
                                    <span className={styles.statusDot}></span>
                                    Admissions Assistant
                                </div>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>
                            <X size={20} />
                        </button>
                    </div>

                    {/* Chat Area */}
                    <div className={styles.chatArea}>
                        {messages.map((msg) => (
                            <div key={msg.id} className={`${styles.messageRow} ${msg.sender === 'user' ? styles.msgUser : styles.msgBot}`}>
                                <div className={`${styles.bubble} ${msg.sender === 'user' ? styles.bubbleUser : styles.bubbleBot}`}>
                                    {typeof msg.text === 'string' ? (
                                        <p style={{margin: 0, whiteSpace: 'pre-wrap'}}>{msg.text}</p>
                                    ) : (
                                        <div>{msg.text}</div>
                                    )}
                                </div>
                            </div>
                        ))}
                        
                        {/* Options */}
                        {messages.length > 0 && messages[messages.length - 1].type === 'options' && messages[messages.length - 1].sender === 'bot' && (
                            <div className={styles.optionsWrapper}>
                                {messages[messages.length - 1].options?.map((opt, idx) => (
                                    <button key={idx} onClick={() => handleOptionSelect(opt)} className={styles.optionBtn}>
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* End Action */}
                        {messages.length > 0 && messages[messages.length - 1].type === 'end' && messages[messages.length - 1].sender === 'bot' && (
                            <button onClick={handleWhatsAppRedirect} className={styles.ctaBtn}>
                                <MessageSquare size={18} />
                                Message on WhatsApp
                            </button>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className={styles.inputArea}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            disabled={currentStep === 6 || (messages.length > 0 && messages[messages.length-1].type === 'options')}
                            placeholder={currentStep === 6 ? "Chat ended." : "Type your answer..."}
                            className={styles.inputField}
                        />
                        <button
                            onClick={handleSend}
                            disabled={!inputValue.trim() || currentStep === 6}
                            className={styles.sendBtn}
                        >
                            <Send size={18} style={{ marginLeft: '2px' }} />
                        </button>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`${styles.toggleBtn} ${isOpen ? styles.toggleBtnOpen : ''}`}
            >
                {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
            </button>
        </div>
    );
}
