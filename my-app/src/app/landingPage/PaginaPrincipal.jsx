import React from 'react';
import {Carousel, Carousel2} from './components/Carousel';
import { TextContainer, TextContainer2, TextContainer3 } from './components/TextContainer';
import Cards from '../landingPage/components/Cards';

const PaginaPrincipal = () => {

  return(
      <div>  
         
        
        <Carousel/>
        <TextContainer />
        <TextContainer2/>
        <Carousel2/>
        <TextContainer3/>

      
        

      </div>
  )
}

export default PaginaPrincipal
