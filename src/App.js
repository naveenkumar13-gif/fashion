
import React, { useEffect } from 'react';
// import TodoList from './Todo/ToDo';
import Header from './components/Header'
import NavBar from '../src/components/NavBar'
import Company from './components/Company'
import Product from './components/Product'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Sale from './components/Sale';
import Favourite from './components/Favourite';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700, 
      easing: 'ease-in-out', 
      once: false, // Animation happens only once
    });
  }, []);

  return (
    <div className="App"  >
      <NavBar />
      <Header/>
      <Company/>
      <Product/>
      <Sale/>
     <Favourite/>
      {/* <TodoList/> */}
    </div>
  );
}

export default App;
