import React from 'react';
import { motion } from 'framer-motion';

interface PartnerProps {
    name: string;
    logo: string;
    description: string;
}

const PartnerCard: React.FC<PartnerProps> = ({ name, logo }) => {
    return (
        <motion.div
            className="flex items-center justify-center"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
        >            <div className="w-[120px] h-[120px] flex justify-center items-center p-4 bg-white/90 backdrop-blur-sm rounded-xl hover:bg-white hover:border-2 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300">
                <img
                    src={logo}
                    alt={`${name} logo`}
                    className="max-h-full w-auto object-contain hover:transform hover:scale-105 transition-transform duration-300"
                />
            </div>
        </motion.div>
    );
};

const Partners: React.FC = () => {
    // Sample partner data - in a real app, this would come from an API or database
    const partners = [
        {
            name: "Global Education Fund",
            logo: "/images/partners/partner1.svg",
            description: "Supporting educational initiatives worldwide with a focus on accessibility."
        },
        {
            name: "Future Scholars Institute",
            logo: "/images/partners/partner2.svg",
            description: "Dedicated to identifying and nurturing academic talent across disciplines."
        },
        {
            name: "Bright Horizons Foundation",
            logo: "/images/partners/partner3.svg",
            description: "Providing financial aid and mentorship to promising students."
        },
        {
            name: "Tech Education Alliance",
            logo: "/images/partners/partner4.svg",
            description: "Bridging the gap between education and technology industry needs."
        },
        {
            name: "Arts & Humanities Council",
            logo: "/images/partners/partner5.svg",
            description: "Supporting students pursuing careers in creative and cultural fields."
        },
        {
            name: "STEM Advancement Program",
            logo: "/images/partners/partner6.svg",
            description: "Promoting excellence in science, technology, engineering, and mathematics."
        }]; return (<section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50/80 to-purple-50/90"></div>
            <div className="absolute inset-0 mesh-pattern opacity-20"></div>
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative"><div className="flex flex-col lg:flex-row items-start gap-12">
                {/* Header Section */}
                <div className="lg:w-1/2 lg:sticky lg:top-24">
                    <div className="text-left lg:pr-8">
                        <span className="text-blue-600 font-handlee text-xl mb-3 block">Join Our Network</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-quicksand">Trusted by Leading Institutions</h2>
                        <p className="text-xl text-gray-600 leading-relaxed font-quicksand">
                            We collaborate with prestigious organizations worldwide to create opportunities
                            and shape the future of education. Together, we're making quality education accessible to all.
                        </p>
                    </div>
                </div>

                {/* Partners Grid */}                    <div className="lg:w-1/2 w-full">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {partners.map((partner, index) => (
                            <PartnerCard
                                key={index}
                                name={partner.name}
                                logo={partner.logo}
                                description={partner.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </section>
        );
};

export default Partners;