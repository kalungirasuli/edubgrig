import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Institution {
    id: string;
    name: string;
    location: string;
    type: string;
    logo: string;
}

const InstitutionSelector: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const [institutions, setInstitutions] = useState<Institution[]>([]);
    const [filteredInstitutions, setFilteredInstitutions] = useState<Institution[]>([]);

    // Sample institutions data - in a real app, this would come from an API or database
    useEffect(() => {
        // Simulating API call
        const fetchInstitutions = () => {
            const data: Institution[] = [
                {
                    id: '1',
                    name: 'University of Technology',
                    location: 'New York, NY',
                    type: 'university',
                    logo: '/images/institutions/uni1.svg'
                },
                {
                    id: '2',
                    name: 'State College',
                    location: 'Boston, MA',
                    type: 'college',
                    logo: '/images/institutions/college1.svg'
                },
                {
                    id: '3',
                    name: 'Technical Institute',
                    location: 'San Francisco, CA',
                    type: 'institute',
                    logo: '/images/institutions/tech1.svg'
                },
                {
                    id: '4',
                    name: 'Arts Academy',
                    location: 'Chicago, IL',
                    type: 'academy',
                    logo: '/images/institutions/arts1.svg'
                },
                {
                    id: '5',
                    name: 'Medical University',
                    location: 'Houston, TX',
                    type: 'university',
                    logo: '/images/institutions/med1.svg'
                },
                {
                    id: '6',
                    name: 'Business School',
                    location: 'Miami, FL',
                    type: 'school',
                    logo: '/images/institutions/business1.svg'
                },
                {
                    id: '7',
                    name: 'Engineering College',
                    location: 'Seattle, WA',
                    type: 'college',
                    logo: '/images/institutions/eng1.svg'
                },
                {
                    id: '8',
                    name: 'Science Academy',
                    location: 'Denver, CO',
                    type: 'academy',
                    logo: '/images/institutions/science1.svg'
                }
            ];

            setInstitutions(data);
            setFilteredInstitutions(data);
        };

        fetchInstitutions();
    }, []);

    // Filter institutions based on search term and selected type
    useEffect(() => {
        const results = institutions.filter(institution => {
            const matchesSearch = institution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                institution.location.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType = selectedType === 'all' || institution.type === selectedType;

            return matchesSearch && matchesType;
        });

        setFilteredInstitutions(results);
    }, [searchTerm, selectedType, institutions]);

    // Get unique institution types for the filter dropdown
    const institutionTypes = ['all', ...Array.from(new Set(institutions.map(inst => inst.type)))];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Your Institution</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore scholarships and opportunities at these partner institutions
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="max-w-4xl mx-auto mb-10">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search by name or location"
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="md:w-1/4">
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            >
                                {institutionTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type.charAt(0).toUpperCase() + type.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Institutions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {filteredInstitutions.length > 0 ? (
                        filteredInstitutions.map((institution) => (
                            <motion.div
                                key={institution.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="p-4 bg-gray-50 flex items-center justify-center h-32">
                                    <img
                                        src={institution.logo}
                                        alt={`${institution.name} logo`}
                                        className="h-16 w-auto object-contain"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{institution.name}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{institution.location}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-medium px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                                            {institution.type.charAt(0).toUpperCase() + institution.type.slice(1)}
                                        </span>
                                        <a
                                            href={`/institutions/${institution.id}`}
                                            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                                        >
                                            View Details
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10">
                            <p className="text-gray-500 text-lg">No institutions found matching your criteria.</p>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedType('all');
                                }}
                                className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
                            >
                                Reset Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default InstitutionSelector;