import React from 'react';
import { Element } from 'react-scroll';
import Promo from '../Promo/Promo';
import AboutUs from '../AboutUs/AboutUs';
import OurServices from '../OurServices/OurServices';

const Main = () => {
  return (
    <main className='main'>
      <Element name='promo' className='main__element'>
        <Promo />
      </Element>
      <Element name='about-us' className='main__element'>
        <AboutUs />
      </Element>
      <Element name='our-services' className='main__element'>
        <OurServices />
      </Element>
    </main>
  );
}

export default Main;