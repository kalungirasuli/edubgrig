import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-50/90"></div>
            <div className="absolute inset-0 mesh-pattern opacity-20"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
                <div className="flex flex-col lg:flex-row items-start gap-12">
                    {/* Contact Information */}
                    <div className="lg:w-1/2 lg:sticky lg:top-24">
                        <div className="text-left lg:pr-8">
                            <span className="text-blue-600 font-handlee text-xl mb-3 block">Get in Touch</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-quicksand">Let's Connect</h2>
                            <p className="text-xl text-gray-600 leading-relaxed font-quicksand mb-8">
                                Have questions about scholarships or want to partner with us? 
                                We're here to help you navigate your educational journey.
                            </p>
                            
                            {/* Contact Details */}
                            <div className="space-y-4 text-gray-600">
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>ugandaeducationbridge@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>+256 755381419</span>
                                    <span>/</span>
                                    <span>+256 774382339</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>Nansana Kyebando</span>
                                </div>
                            </div>
                        </div>
                    </div>                    {/* Contact Form */}
                    <div className="lg:w-1/2 w-full">
                        <motion.div 
                            className="bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/30"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">                                <div className="relative">
                                    <label htmlFor="name" className="absolute -top-3 left-3 px-2 text-sm font-medium text-gray-600 rounded-md bg-gradient-to-b from-white via-white to-white/80 shadow-sm z-10">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm mt-1"
                                        required
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="relative">
                                <label htmlFor="name" className="absolute -top-3 left-3 px-2 text-sm font-medium text-gray-600 rounded-md bg-gradient-to-b from-white via-white to-white/80 shadow-sm z-10">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm mt-1"
                                        required
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="relative">
                                <label htmlFor="name" className="absolute -top-3 left-3 px-2 text-sm font-medium text-gray-600 rounded-md bg-gradient-to-b from-white via-white to-white/80 shadow-sm z-10">
                                        Subject
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                                        required
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="scholarship">Scholarship Inquiry</option>
                                        <option value="partnership">Partnership Opportunity</option>
                                        <option value="support">General Support</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div className="relative">
                                <label htmlFor="name" className="absolute -top-3 left-3 px-2 text-sm font-medium text-gray-600 rounded-md bg-gradient-to-b from-white via-white to-white/80 shadow-sm z-10">
                                       Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full px-4 py-3 bg-white/50 border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
                                        required
                                        placeholder="Type your message here..."
                                    ></textarea>
                                </div>
                                <motion.button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Message
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
