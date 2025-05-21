import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Resource {
    id: string;
    title: string;
    description: string;
    type: 'guide' | 'template' | 'video' | 'article' | 'tool';
    thumbnail: string;
    url: string;
    downloadable: boolean;
    fileSize?: string;
    dateAdded: string;
    popularity: number; // 1-5 rating
}

const ResourcesPage: React.FC = () => {
    const [resources, setResources] = useState<Resource[]>([]);
    const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedType, setSelectedType] = useState('all');
    const [sortBy, setSortBy] = useState('newest');
    const [loading, setLoading] = useState(true);

    // Fetch resources data
    useEffect(() => {
        // Simulating API call
        const fetchResources = () => {
            setLoading(true);

            // In a real app, this would be an API call
            setTimeout(() => {
                const data: Resource[] = [
                    {
                        id: '1',
                        title: 'Scholarship Application Guide',
                        description: 'A comprehensive guide to applying for scholarships, including tips for writing personal statements and gathering recommendations.',
                        type: 'guide',
                        thumbnail: '/images/resources/scholarship-guide.jpg',
                        url: '/resources/scholarship-application-guide.pdf',
                        downloadable: true,
                        fileSize: '2.4 MB',
                        dateAdded: '2023-06-15',
                        popularity: 5
                    },
                    {
                        id: '2',
                        title: 'Personal Statement Template',
                        description: 'A template with examples to help you craft a compelling personal statement for your college applications.',
                        type: 'template',
                        thumbnail: '/images/resources/personal-statement.jpg',
                        url: '/resources/personal-statement-template.docx',
                        downloadable: true,
                        fileSize: '1.2 MB',
                        dateAdded: '2023-07-22',
                        popularity: 4
                    },
                    {
                        id: '3',
                        title: 'Financial Aid Explained',
                        description: 'Video tutorial explaining different types of financial aid, how to apply, and important deadlines.',
                        type: 'video',
                        thumbnail: '/images/resources/financial-aid-video.jpg',
                        url: 'https://www.youtube.com/watch?v=example',
                        downloadable: false,
                        dateAdded: '2023-05-10',
                        popularity: 4
                    },
                    {
                        id: '4',
                        title: 'College Essay Writing Tips',
                        description: 'Expert advice on writing college essays that stand out and showcase your unique qualities.',
                        type: 'article',
                        thumbnail: '/images/resources/essay-tips.jpg',
                        url: '/resources/college-essay-writing-tips.html',
                        downloadable: false,
                        dateAdded: '2023-08-05',
                        popularity: 3
                    },
                    {
                        id: '5',
                        title: 'Scholarship Search Tool Guide',
                        description: 'Learn how to effectively use scholarship search tools to find opportunities that match your profile.',
                        type: 'guide',
                        thumbnail: '/images/resources/search-tool.jpg',
                        url: '/resources/scholarship-search-guide.pdf',
                        downloadable: true,
                        fileSize: '3.1 MB',
                        dateAdded: '2023-04-18',
                        popularity: 5
                    },
                    {
                        id: '6',
                        title: 'FAFSA Application Walkthrough',
                        description: 'Step-by-step video guide to completing the Free Application for Federal Student Aid (FAFSA).',
                        type: 'video',
                        thumbnail: '/images/resources/fafsa-video.jpg',
                        url: 'https://www.youtube.com/watch?v=example2',
                        downloadable: false,
                        dateAdded: '2023-09-01',
                        popularity: 5
                    },
                    {
                        id: '7',
                        title: 'Resume Builder for Students',
                        description: 'Interactive tool to help students create professional resumes for scholarship and internship applications.',
                        type: 'tool',
                        thumbnail: '/images/resources/resume-builder.jpg',
                        url: '/tools/resume-builder',
                        downloadable: false,
                        dateAdded: '2023-07-10',
                        popularity: 4
                    },
                    {
                        id: '8',
                        title: 'Interview Preparation Guide',
                        description: 'Prepare for scholarship and college admission interviews with this comprehensive guide.',
                        type: 'guide',
                        thumbnail: '/images/resources/interview-prep.jpg',
                        url: '/resources/interview-preparation.pdf',
                        downloadable: true,
                        fileSize: '1.8 MB',
                        dateAdded: '2023-08-20',
                        popularity: 3
                    },
                    {
                        id: '9',
                        title: 'Recommendation Letter Templates',
                        description: 'Templates and examples for teachers and mentors writing recommendation letters.',
                        type: 'template',
                        thumbnail: '/images/resources/recommendation-letter.jpg',
                        url: '/resources/recommendation-templates.zip',
                        downloadable: true,
                        fileSize: '4.2 MB',
                        dateAdded: '2023-06-30',
                        popularity: 4
                    },
                    {
                        id: '10',
                        title: 'Scholarship Essay Examples',
                        description: 'Collection of successful scholarship essays with analysis and commentary.',
                        type: 'article',
                        thumbnail: '/images/resources/essay-examples.jpg',
                        url: '/resources/scholarship-essay-examples.html',
                        downloadable: false,
                        dateAdded: '2023-05-25',
                        popularity: 5
                    }
                ];

                setResources(data);
                setFilteredResources(data);
                setLoading(false);
            }, 1000);
        };

        fetchResources();
    }, []);

    // Filter and sort resources
    useEffect(() => {
        let results = [...resources];

        // Apply type filter
        if (selectedType !== 'all') {
            results = results.filter(resource => resource.type === selectedType);
        }

        // Apply search filter
        if (searchTerm) {
            const searchLower = searchTerm.toLowerCase();
            results = results.filter(resource =>
                resource.title.toLowerCase().includes(searchLower) ||
                resource.description.toLowerCase().includes(searchLower)
            );
        }

        // Apply sorting
        switch (sortBy) {
            case 'newest':
                results.sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime());
                break;
            case 'oldest':
                results.sort((a, b) => new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime());
                break;
            case 'popular':
                results.sort((a, b) => b.popularity - a.popularity);
                break;
            case 'title':
                results.sort((a, b) => a.title.localeCompare(b.title));
                break;
            default:
                break;
        }

        setFilteredResources(results);
    }, [resources, searchTerm, selectedType, sortBy]);

    // Get unique resource types for the filter dropdown
    const resourceTypes = ['all', ...Array.from(new Set(resources.map(resource => resource.type)))];

    // Icon mapping for resource types
    const typeIcons: Record<string, React.ReactNode> = {
        guide: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        template: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
        video: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        ),
        article: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
        ),
        tool: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        )
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Educational Resources</h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Access guides, templates, videos, and tools to help you navigate the educational journey
                    </p>
                </div>

                {/* Filters and Search */}
                <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Search */}
                        <div>
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
                                    placeholder="Search resources..."
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        {/* Type Filter */}
                        <div>
                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            >
                                {resourceTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1) + 's'}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Sort */}
                        <div>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                            >
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="popular">Most Popular</option>
                                <option value="title">Alphabetical</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Resources Grid */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
                    </div>
                ) : filteredResources.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredResources.map((resource) => (
                            <motion.div
                                key={resource.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                                whileHover={{ y: -5 }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={resource.thumbnail}
                                        alt={resource.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center mb-2">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${resource.type === 'guide' ? 'bg-blue-100 text-blue-800' : resource.type === 'template' ? 'bg-purple-100 text-purple-800' : resource.type === 'video' ? 'bg-red-100 text-red-800' : resource.type === 'article' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                            <span className="mr-1">{typeIcons[resource.type]}</span>
                                            {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                                        </span>
                                        {resource.downloadable && (
                                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                                {resource.fileSize}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">{resource.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-gray-500">
                                            Added: {new Date(resource.dateAdded).toLocaleDateString()}
                                        </span>
                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-4 h-4 ${i < resource.popularity ? 'text-yellow-400' : 'text-gray-300'}`}
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                    <a
                                        href={resource.url}
                                        target={resource.type === 'video' ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full justify-center"
                                    >
                                        {resource.downloadable ? 'Download' : resource.type === 'video' ? 'Watch Video' : resource.type === 'tool' ? 'Use Tool' : 'View Resource'}
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-white rounded-lg shadow-sm">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="mt-2 text-lg font-medium text-gray-900">No resources found</h3>
                        <p className="mt-1 text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
                        <div className="mt-6">
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedType('all');
                                    setSortBy('newest');
                                }}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </div>
                )}

                {/* Request Resource Section */}
                <div className="mt-16 bg-indigo-50 rounded-lg p-6 md:p-8">
                    <div className="md:flex md:items-center md:justify-between">
                        <div className="md:w-2/3">
                            <h2 className="text-2xl font-bold text-indigo-900 mb-2">Can't find what you're looking for?</h2>
                            <p className="text-indigo-700">
                                Request a specific resource or suggest new content that would help you in your educational journey.
                            </p>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <button
                                onClick={() => alert('Resource request form would open here')}
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Request Resource
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourcesPage;