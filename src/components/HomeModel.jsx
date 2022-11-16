import { useGLTF } from '@react-three/drei';
import model from '../assets/model/artijecta.glb?url';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

export default function HomeModel() {
  const gltf = useGLTF(model);
  const ref = useRef();

  useFrame(() => {
    // ref.current.rotation.y += 0.005;
  });
  return (
    <primitive
      ref={ref}
      object={gltf.scene}
      scale={[2.5, 2.5, 2.5]}
    />
  );
}
