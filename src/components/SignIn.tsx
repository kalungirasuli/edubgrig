import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SignIn: React.FC = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement authentication logic
        console.log('Form submitted:', { email, password, name });
    };

    return (
        <section className="min-h-screen py-24 relative overflow-hidden flex items-center">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-50/90"></div>
            <div className="absolute inset-0 mesh-pattern opacity-20"></div>

            {/* Content */}
            <div className="container mx-auto px-4 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md mx-auto"
                >
                    <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 font-quicksand mb-2">
                                {isSignIn ? 'Welcome Back' : 'Create Account'}
                            </h2>
                            <p className="text-gray-600 font-quicksand">
                                {isSignIn 
                                    ? 'Sign in to continue your educational journey' 
                                    : 'Join our community of learners'}
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {!isSignIn && (
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>
                            )}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                            >
                                {isSignIn ? 'Sign In' : 'Create Account'}
                            </motion.button>

                            {/* Toggle Sign In/Sign Up */}
                            <div className="text-center mt-4">
                                <button
                                    type="button"
                                    onClick={() => setIsSignIn(!isSignIn)}
                                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                                >
                                    {isSignIn 
                                        ? "Don't have an account? Sign Up" 
                                        : "Already have an account? Sign In"}
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SignIn;
