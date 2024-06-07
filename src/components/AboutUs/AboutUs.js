import React from 'react';
import Model from '../Model/Model';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const AboutUs = () => {
  return (
    <section className="about-us">
      <h2 className="about-us__title">DISCOVER OUR STUDIO</h2>
      <div className="about-us__content">
        <p className="about-us__subtitle">Explore 3D Masterpieces</p>
        <p className="about-us__description">Step into the realm of 3D artistry through our collection of captivating models. Located in the heart of St. Petersburg, our studio invites you to delve into boundless creativity and exceptional craftsmanship.</p>
        <a href="/contact" className="about-us__contact">Contact Us</a>
      </div>
      <div className="about-us__image">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 5]} />
          <Model />
          <OrbitControls />
        </Canvas>
      </div>
    </section>
  );
}

export default AboutUs;