import React from 'react';
import '../../css/App.css';
import Cards from '../Components/Cards';
import HomeSection from '../Components/HomeSection';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
      <HomeSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
