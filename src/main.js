import React, { useEffect } from 'react'
import Header from './components/Header'
import NavBar from '../src/components/NavBar'
import Company from './components/Company';
import Product from './components/Product'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Sale from './components/Sale';
import Favourite from './components/Favourite';
import Download from './components/Download';
import Contact from './components/Contact'
import Search from './components/Search'

function Index() {

  useEffect(() => {
    AOS.init({
      duration: 700, 
      easing: 'ease-in-out', 
      once: false, // Animation happens only once
    });
  }, []);
  return (
    <div>
      <NavBar />
      <Header/>
      <Company/>
      <Product/>
      <Sale/>
     <Favourite/>
     <Download/>
     <Search/>
     <Contact/>
    </div>
  )
}

export default Index