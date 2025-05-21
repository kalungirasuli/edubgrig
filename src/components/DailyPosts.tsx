import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface PostProps {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    image: string;
    readTime: string;
}

const PostCard: React.FC<PostProps> = ({ id, title, excerpt, date, author, category, image, readTime }) => {
    return (
        <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <Link to={`/blog/${id}`} className="block">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
            </Link>
            <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-semibold px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full">{category}</span>
                    <span className="text-xs text-gray-500">{date}</span>
                </div>
                <Link to={`/blog/${id}`} className="block">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-indigo-600 transition-colors duration-300">{title}</h3>
                </Link>
                <p className="text-gray-600 mb-4">{excerpt}</p>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">By {author}</span>
                    <span className="text-sm text-gray-500">{readTime} read</span>
                </div>
            </div>
        </motion.div>
    );
};

const DailyPosts: React.FC = () => {
    // Sample posts data - in a real app, this would come from an API or database
    const posts: PostProps[] = [
        {
            id: '1',
            title: '10 Scholarships with Deadlines This Month',
            excerpt: 'Don\'t miss these upcoming scholarship opportunities with deadlines at the end of this month.',
            date: 'June 5, 2023',
            author: 'Emma Rodriguez',
            category: 'Deadlines',
            image: '/images/blog/scholarships-deadline.jpg',
            readTime: '4 min'
        },
        {
            id: '2',
            title: 'How to Write a Winning Scholarship Essay',
            excerpt: 'Expert tips on crafting compelling scholarship essays that stand out to selection committees.',
            date: 'June 3, 2023',
            author: 'Marcus Chen',
            category: 'Tips & Advice',
            image: '/images/blog/essay-writing.jpg',
            readTime: '6 min'
        },
        {
            id: '3',
            title: 'Spotlight: STEM Scholarships for Women',
            excerpt: 'Explore these opportunities specifically designed for women pursuing careers in science, technology, engineering, and mathematics.',
            date: 'June 1, 2023',
            author: 'Priya Sharma',
            category: 'STEM',
            image: '/images/blog/women-stem.jpg',
            readTime: '5 min'
        },
        {
            id: '4',
            title: 'International Student Guide: Financing Your Education Abroad',
            excerpt: 'Navigate the complexities of funding your education in a foreign country with these resources and strategies.',
            date: 'May 29, 2023',
            author: 'Carlos Mendez',
            category: 'International',
            image: '/images/blog/international-students.jpg',
            readTime: '8 min'
        },
        {
            id: '5',
            title: 'New Partnership: EduBridge Connects with 50 More Universities',
            excerpt: 'Our platform now offers scholarship information from 50 additional universities across the country.',
            date: 'May 27, 2023',
            author: 'Aisha Johnson',
            category: 'News',
            image: '/images/blog/university-partnership.jpg',
            readTime: '3 min'
        },
        {
            id: '6',
            title: 'Financial Aid 101: Understanding the FAFSA',
            excerpt: 'A comprehensive guide to completing the Free Application for Federal Student Aid and maximizing your financial assistance.',
            date: 'May 25, 2023',
            author: 'David Wilson',
            category: 'Financial Aid',
            image: '/images/blog/fafsa-guide.jpg',
            readTime: '7 min'
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Updates</h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Stay informed with the latest scholarship opportunities, application tips, and educational resources
                        </p>
                    </div>
                    <Link
                        to="/blog"
                        className="hidden md:flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300"
                    >
                        View all posts
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <PostCard
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            excerpt={post.excerpt}
                            date={post.date}
                            author={post.author}
                            category={post.category}
                            image={post.image}
                            readTime={post.readTime}
                        />
                    ))}
                </div>

                <div className="mt-10 text-center md:hidden">
                    <Link
                        to="/blog"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300"
                    >
                        View all posts
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default DailyPosts;