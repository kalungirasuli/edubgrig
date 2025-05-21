import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

interface SchoolDetailProps {
    id?: string; // Optional prop if not using router params
}

interface School {
    id: string;
    name: string;
    description: string;
    location: {
        address: string;
        city: string;
        state: string;
        country: string;
        coordinates: {
            lat: number;
            lng: number;
        };
    };
    images: string[];
    activities: {
        name: string;
        description: string;
        icon: string;
    }[];
    programs: {
        name: string;
        level: string;
        duration: string;
        description: string;
    }[];
    scholarships: {
        name: string;
        amount: string;
        deadline: string;
        eligibility: string;
    }[];
}

const SchoolDetail: React.FC<SchoolDetailProps> = ({ id: propId }) => {
    const params = useParams<{ id: string }>();
    const schoolId = propId || params.id;

    const [school, setSchool] = useState<School | null>(null);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('programs');
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        // Simulating API call to fetch school details
        const fetchSchoolDetails = () => {
            setLoading(true);

            // In a real app, this would be an API call
            setTimeout(() => {
                const schoolData: School = {
                    id: schoolId || '1',
                    name: 'University of Technology',
                    description: 'The University of Technology is a leading institution dedicated to advancing knowledge in science, engineering, and technology. With state-of-the-art facilities and renowned faculty, we provide students with an exceptional education that prepares them for successful careers in their chosen fields.',
                    location: {
                        address: '123 University Avenue',
                        city: 'New York',
                        state: 'NY',
                        country: 'USA',
                        coordinates: {
                            lat: 40.7128,
                            lng: -74.0060
                        }
                    },
                    images: [
                        '/images/schools/campus1.jpg',
                        '/images/schools/library.jpg',
                        '/images/schools/lab.jpg',
                        '/images/schools/dorm.jpg',
                        '/images/schools/cafeteria.jpg',
                        '/images/schools/sports.jpg'
                    ],
                    activities: [
                        {
                            name: 'Research Opportunities',
                            description: 'Engage in cutting-edge research projects alongside faculty members.',
                            icon: '🔬'
                        },
                        {
                            name: 'Student Clubs',
                            description: 'Join over 50 student-led organizations covering various interests.',
                            icon: '👥'
                        },
                        {
                            name: 'Sports Programs',
                            description: 'Participate in intramural and varsity sports teams.',
                            icon: '🏆'
                        },
                        {
                            name: 'Arts & Culture',
                            description: 'Express yourself through music, theater, and visual arts programs.',
                            icon: '🎭'
                        },
                        {
                            name: 'Community Service',
                            description: 'Give back through volunteer opportunities and service-learning projects.',
                            icon: '🤝'
                        },
                        {
                            name: 'International Exchange',
                            description: 'Study abroad programs with partner institutions worldwide.',
                            icon: '🌍'
                        }
                    ],
                    programs: [
                        {
                            name: 'Computer Science',
                            level: 'Bachelor\'s, Master\'s, PhD',
                            duration: '4 years (Bachelor\'s)',
                            description: 'Comprehensive program covering software development, algorithms, artificial intelligence, and more.'
                        },
                        {
                            name: 'Electrical Engineering',
                            level: 'Bachelor\'s, Master\'s, PhD',
                            duration: '4 years (Bachelor\'s)',
                            description: 'Study of electrical systems, electronics, power systems, and telecommunications.'
                        },
                        {
                            name: 'Mechanical Engineering',
                            level: 'Bachelor\'s, Master\'s, PhD',
                            duration: '4 years (Bachelor\'s)',
                            description: 'Focus on design, manufacturing, and operation of mechanical systems.'
                        },
                        {
                            name: 'Data Science',
                            level: 'Bachelor\'s, Master\'s',
                            duration: '4 years (Bachelor\'s), 2 years (Master\'s)',
                            description: 'Interdisciplinary program combining statistics, computer science, and domain expertise.'
                        }
                    ],
                    scholarships: [
                        {
                            name: 'Academic Excellence Scholarship',
                            amount: 'Up to $20,000 per year',
                            deadline: 'February 15',
                            eligibility: 'GPA of 3.8 or higher, SAT score above 1450'
                        },
                        {
                            name: 'Diversity in STEM Scholarship',
                            amount: 'Up to $15,000 per year',
                            deadline: 'March 1',
                            eligibility: 'Underrepresented students in STEM fields'
                        },
                        {
                            name: 'Research Innovation Grant',
                            amount: '$5,000 - $10,000',
                            deadline: 'Rolling basis',
                            eligibility: 'Students with research proposals in technology fields'
                        },
                        {
                            name: 'Community Leadership Award',
                            amount: '$8,000 per year',
                            deadline: 'April 1',
                            eligibility: 'Demonstrated leadership in community service'
                        }
                    ]
                };

                setSchool(schoolData);
                setLoading(false);
            }, 1000);
        };

        fetchSchoolDetails();
    }, [schoolId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
            </div>
        );
    }

    if (!school) {
        return (
            <div className="text-center py-16">
                <h2 className="text-2xl font-bold text-gray-800">School not found</h2>
                <p className="text-gray-600 mt-2">The institution you're looking for doesn't exist or has been removed.</p>
            </div>
        );
    }

    return (
        <div className="bg-white">
            {/* Hero Section with Main Image */}
            <div className="relative h-80 md:h-96 lg:h-[500px] overflow-hidden">
                <img
                    src={school.images[activeImageIndex]}
                    alt={`${school.name} campus`}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{school.name}</h1>
                        <p className="text-white/90 text-lg md:text-xl max-w-2xl">
                            {school.location.city}, {school.location.state}, {school.location.country}
                        </p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2">
                        {/* Description */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">About {school.name}</h2>
                            <p className="text-gray-700 leading-relaxed">{school.description}</p>
                        </div>

                        {/* Gallery */}
                        <div className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Campus Gallery</h2>
                            <div className="grid grid-cols-3 gap-2">
                                {school.images.map((image, index) => (
                                    <div
                                        key={index}
                                        className={`cursor-pointer rounded-lg overflow-hidden ${index === activeImageIndex ? 'ring-2 ring-indigo-500' : ''}`}
                                        onClick={() => setActiveImageIndex(index)}
                                    >
                                        <img
                                            src={image}
                                            alt={`Campus view ${index + 1}`}
                                            className="w-full h-24 object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tabs */}
                        <div className="mb-10">
                            <div className="border-b border-gray-200">
                                <nav className="-mb-px flex space-x-8">
                                    {['programs', 'scholarships'].map((tab) => (
                                        <button
                                            key={tab}
                                            onClick={() => setActiveTab(tab)}
                                            className={`${activeTab === tab ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm md:text-base capitalize`}
                                        >
                                            {tab}
                                        </button>
                                    ))}
                                </nav>
                            </div>

                            <div className="mt-6">
                                {activeTab === 'programs' && (
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Programs</h3>
                                        <div className="space-y-6">
                                            {school.programs.map((program, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="bg-gray-50 p-4 rounded-lg"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                                >
                                                    <h4 className="text-lg font-medium text-gray-900 mb-1">{program.name}</h4>
                                                    <div className="flex flex-wrap gap-2 mb-2">
                                                        <span className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded">{program.level}</span>
                                                        <span className="text-sm text-gray-600 bg-gray-200 px-2 py-1 rounded">{program.duration}</span>
                                                    </div>
                                                    <p className="text-gray-700">{program.description}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'scholarships' && (
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Scholarships</h3>
                                        <div className="space-y-6">
                                            {school.scholarships.map((scholarship, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="bg-gray-50 p-4 rounded-lg"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                                >
                                                    <h4 className="text-lg font-medium text-gray-900 mb-1">{scholarship.name}</h4>
                                                    <div className="flex flex-wrap gap-2 mb-2">
                                                        <span className="text-sm font-semibold text-green-800 bg-green-100 px-2 py-1 rounded">{scholarship.amount}</span>
                                                        <span className="text-sm text-red-800 bg-red-100 px-2 py-1 rounded">Deadline: {scholarship.deadline}</span>
                                                    </div>
                                                    <p className="text-gray-700"><span className="font-medium">Eligibility:</span> {scholarship.eligibility}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        {/* Map */}
                        <div className="mb-8 bg-gray-100 p-4 rounded-lg">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Location</h3>
                            <div className="aspect-w-16 aspect-h-9 mb-4">
                                <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                                    {/* In a real app, this would be a Google Maps or similar component */}
                                    <div className="text-center p-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <p className="text-gray-600">
                                            Map integration would be here<br />
                                            Coordinates: {school.location.coordinates.lat}, {school.location.coordinates.lng}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <address className="not-italic text-gray-700">
                                <p>{school.location.address}</p>
                                <p>{school.location.city}, {school.location.state}</p>
                                <p>{school.location.country}</p>
                            </address>
                        </div>

                        {/* Activities */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Activities & Opportunities</h3>
                            <div className="space-y-4">
                                {school.activities.map((activity, index) => (
                                    <motion.div
                                        key={index}
                                        className="flex items-start p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-2xl mr-3">
                                            {activity.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-base font-medium text-gray-900">{activity.name}</h4>
                                            <p className="text-sm text-gray-600">{activity.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SchoolDetail;