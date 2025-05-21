import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TestimonialProps {
    id: number;
    name: string;
    image: string;
    role: string;
    institution: string;
    quote: string;
}

const Testimonials: React.FC = () => {
    // Sample testimonial data - in a real app, this would come from an API or database
    const testimonials: TestimonialProps[] = [
        {
            id: 1,
            name: "Sarah Johnson",
            image: "/images/testimonials/student1.jpg",
            role: "Undergraduate Student",
            institution: "University of Technology",
            quote: "EduBridge helped me find a scholarship that covered 75% of my tuition. Their platform was easy to use and the personalized recommendations were spot on!"
        },
        {
            id: 2,
            name: "Michael Chen",
            image: "/images/testimonials/student2.jpg",
            role: "Graduate Student",
            institution: "State University",
            quote: "As a first-generation college student, navigating financial aid was overwhelming. EduBridge simplified the process and connected me with opportunities I wouldn't have found otherwise."
        },
        {
            id: 3,
            name: "Aisha Patel",
            image: "/images/testimonials/student3.jpg",
            role: "PhD Candidate",
            institution: "National Science Academy",
            quote: "The specialized filters for research grants saved me countless hours. I secured funding for my entire doctoral program thanks to EduBridge's comprehensive database."
        },
        {
            id: 4,
            name: "James Wilson",
            image: "/images/testimonials/student4.jpg",
            role: "High School Senior",
            institution: "Lincoln High School",
            quote: "EduBridge's resources helped me prepare strong applications for multiple scholarships. Their tips and guidance were invaluable in my college preparation journey."
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const goToTestimonial = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section className="py-16 bg-indigo-50">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear from students who found their perfect educational opportunities through our platform
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Carousel */}
                    <div className="overflow-hidden rounded-xl bg-white shadow-lg">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="p-8 md:p-12 flex flex-col md:flex-row items-center"
                            >
                                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                                    <div className="relative">
                                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-indigo-100">
                                            <img
                                                src={testimonials[currentIndex].image}
                                                alt={testimonials[currentIndex].name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 bg-indigo-500 text-white p-2 rounded-full">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:w-2/3 md:pl-8">
                                    <blockquote className="italic text-gray-600 mb-4">"{testimonials[currentIndex].quote}"</blockquote>
                                    <div className="font-semibold text-gray-900">{testimonials[currentIndex].name}</div>
                                    <div className="text-indigo-600">{testimonials[currentIndex].role}</div>
                                    <div className="text-gray-500 text-sm">{testimonials[currentIndex].institution}</div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:-translate-x-6"
                        aria-label="Previous testimonial"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 md:translate-x-6"
                        aria-label="Next testimonial"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-6 space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-200 focus:outline-none ${index === currentIndex ? 'bg-indigo-600' : 'bg-gray-300'}`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;