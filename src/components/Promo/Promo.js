import React from 'react';
import Model from '../Model/Model';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Promo() {
  return (
    <div className="promo-container">
      <div className="promo-text-container">
        <h1 className="promo-title">Добро пожаловать в наш магазин 3D моделей!</h1>
        <div className="promo-subtitle">
          <p>Откройте для себя огромную коллекцию высококачественных 3D моделей для проектов:</p>
          <ul>
            <li className="promo-subtitle-word">архитектуры</li>
            <li className="promo-subtitle-word">создания персонажей</li>
            <li className="promo-subtitle-word">промышленных планов</li>
            <li className="promo-subtitle-word">игровых сценариев</li>
          </ul>
        </div>
        <a href="#shop" className="promo-button">Перейти в магазин</a>
      </div>
      <div className="promo-model-container">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 0, 5]} />
          <Model />
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

export default Promo;