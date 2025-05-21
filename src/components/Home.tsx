import React from 'react';
import Hero from './Hero';
import Milestones from './Milestones';
import Partners from './Partners';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import FAQ from './FAQ';

const Home: React.FC = () => {
    return (
        <div>
            <Hero />
            <Milestones />
            <Partners />            <Testimonials />
            <ContactUs />
            <FAQ />
        </div>
    );
};

export default Home;