import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (<section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 font-quicksand">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
                className="md:w-1/2 mb-10 md:mb-0 flex flex-col items-center md:items-start"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            ><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-handlee">
                    Find Your Perfect <span className="text-yellow-300">Bridge</span>
                </h1>
                <p className="text-lg md:text-xl mb-8">
                    Connecting students with educational opportunities and financial aid to help achieve academic dreams.
                </p>                        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start w-full">
                    <motion.button
                        className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out w-full sm:w-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Find Scholarships
                    </motion.button>
                    <motion.button
                        className="bg-transparent hover:bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-lg transition duration-300 ease-in-out w-full sm:w-auto"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Learn More
                    </motion.button>
                </div>
            </motion.div>                    <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="backdrop-blur-md bg-white/10 p-4 rounded-2xl shadow-xl">
                    <img
                        src="/images/girlscholar.jpg"
                        alt="Students and scholarships illustration"
                        className="w-full h-auto rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02]"
                    />
                </div>
            </motion.div>
        </div>
        </div>
    </section>
    );
};

export default Hero;