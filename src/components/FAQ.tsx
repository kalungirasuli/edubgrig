import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
    question: string;
    answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-medium text-gray-900">{question}</h3>
                <span className="ml-6 flex-shrink-0">
                    <svg
                        className={`w-6 h-6 transform ${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform duration-300`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="pt-4 pb-2 pr-12">
                            <p className="text-base text-gray-600">{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ: React.FC = () => {
    // Sample FAQ data - in a real app, this would come from an API or database
    const faqs: FAQItemProps[] = [
        {
            question: "How do I find scholarships that match my profile?",
            answer: "Our platform uses your academic background, interests, and career goals to match you with relevant scholarships. Complete your profile in the dashboard, and we'll provide personalized recommendations based on your qualifications."
        },
        {
            question: "Are there scholarships for international students?",
            answer: "Yes! We have a dedicated section for international scholarships. You can filter by country of origin, destination country, field of study, and degree level to find opportunities specifically for international students."
        },
        {
            question: "How often are new scholarships added to the platform?",
            answer: "We update our database daily with new opportunities. Our team actively searches for and verifies new scholarships, grants, and bursaries to ensure you have access to the most current information."
        },
        {
            question: "Can I get help with my scholarship application?",
            answer: "Absolutely! We offer resources including application guides, essay tips, and interview preparation. Premium members also get access to one-on-one coaching sessions with our scholarship advisors."
        },
        {
            question: "What makes EduBridge different from other scholarship websites?",
            answer: "EduBridge offers personalized matching, verified opportunities, application tracking, deadline reminders, and direct connections with scholarship providers. We focus on quality over quantity, ensuring every listing is legitimate and up-to-date."
        },
        {
            question: "Is there a fee to use EduBridge?",
            answer: "Our basic search and matching features are completely free. We offer a premium subscription that includes advanced filters, application tracking, priority notifications, and advisor support for a monthly fee."
        }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about scholarships and using our platform
                    </p>
                </div>

                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 md:p-8">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>

                <div className="text-center mt-10">
                    <p className="text-gray-600 mb-4">Still have questions?</p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSfChh_Y9ytSuapMiIhyXQCh5QCj1w55Bnq1RLIjk9bvjA78gw/viewform?usp=header" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Click here to apply for sponsorship
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;