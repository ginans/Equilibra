import React from 'react';
import Navbar from './components/Navbar';
import {Carousel, Carousel2} from './components/Carousel';
import { TextContainer, TextContainer2, TextContainer3 } from './components/TextContainer';
import Footer from './components/Footer';
import Cards from '../landingPage/components/Cards';

const PaginaPrincipal = () => {

  return(
      <div>  
         
        <Navbar/>
        <Carousel/>
        <TextContainer />
        <TextContainer2/>
        <Carousel2/>
        
        <TextContainer3/>
        <Footer/>

      
        

      </div>
  )
}

export default PaginaPrincipal
