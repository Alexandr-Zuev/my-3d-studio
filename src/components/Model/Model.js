import React from 'react';
import { useLoader } from '@react-three/fiber';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

function Model() {
  const geometry = useLoader(STLLoader, process.env.PUBLIC_URL + '/stl/logo.stl');
  
  return (
    <mesh geometry={geometry} scale={[0.02, 0.02, 0.02]} position={[-3, 0, 0]}>
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default Model;