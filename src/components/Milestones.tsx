import React from 'react';
import { motion } from 'framer-motion';

interface MilestoneProps {
    icon: React.ReactNode;
    count: string;
    label: string;
}

const MilestoneItem: React.FC<MilestoneProps> = ({ icon, count, label }) => {
    return (
        <motion.div
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm bg-white/90 border border-gray-100"
            whileHover={{ y: -8, scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="text-5xl mb-4 transform transition-transform duration-300 hover:scale-110">{icon}</div>
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">{count}</h3>
            <p className="text-gray-600 text-lg font-quicksand text-center">{label}</p>
        </motion.div>
    );
};

const Milestones: React.FC = () => {
    const milestones = [
        {
            icon: '🎓',
            count: '10,000+',
            label: 'Scholarships Listed'
        },
        {
            icon: '👨‍🎓',
            count: '25,000+',
            label: 'Students Helped'
        },
        {
            icon: '💰',
            count: '$15M+',
            label: 'Scholarship Funds Awarded'
        },
        {
            icon: '🏫',
            count: '500+',
            label: 'Partner Institutions'
        }
    ];

    return (<section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
                <span className="text-blue-600 font-handlee text-xl mb-2 block">Making Education Accessible</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-quicksand">Transforming Dreams into Degrees</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-quicksand leading-relaxed">
                    Every number represents a student's dream fulfilled, a barrier overcome, and a future brightened.
                    Here's how we're making education accessible to everyone.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {milestones.map((milestone, index) => (
                    <MilestoneItem
                        key={index}
                        icon={milestone.icon}
                        count={milestone.count}
                        label={milestone.label}
                    />
                ))}
            </div>
        </div>
    </section>
    );
};

export default Milestones;