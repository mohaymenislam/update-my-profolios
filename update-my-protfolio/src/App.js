import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import { Route, Routes } from 'react-router-dom';

import New_Portfolio from './components/New-Portfolio/New_Portfolio';

// import Template from './components/Template/Testimonials';


const App = () => {
  return (
    <>
    
    
     <Navbar></Navbar>

     
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
         {/* <Route path='/template' element={<Template></Template>}></Route> */}
           {/* <Route path='/new_portfolio' element={<New_Portfolio></New_Portfolio>}></Route> */}
           <Route path='/about' element={<About></About>}></Route>
          <Route path='/skills' element={<Skills></Skills>}></Route>
           <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
           <Route path='/testimonial' element={<Testimonial></Testimonial>}></Route>
           
           <Route path='/contact' element={<Contact></Contact>}></Route> 
           
        </Routes>
     
     
      
      <Footer></Footer>
      <BackToTop></BackToTop>
    </>
    
  );
};

export default App;
