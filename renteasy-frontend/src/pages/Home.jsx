import React from 'react';
import Navbar from '../components/common/Navbar';
import Hero from '../components/homepage/Hero';
import Featured from '../components/homepage/Featured';
import HowItWorks from '../components/homepage/HowItWorks';
import Benefits from '../components/homepage/Benefits';
import Footer from '../components/common/Footer';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <Featured />
    <HowItWorks />
    <Benefits />
    <Footer />
  </>
);

export default Home;