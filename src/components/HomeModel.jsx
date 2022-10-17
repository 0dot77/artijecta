import { Html, useGLTF, useProgress } from '@react-three/drei';
import { Suspense } from 'react';
import model from '../assets/model/artijecta.glb?url';

export default function HomeModel() {
  const gltf = useGLTF(model);
  return (
    <primitive
      object={gltf.scene}
      scale={[2.5, 2.5, 2.5]}
    ></primitive>
  );
}
