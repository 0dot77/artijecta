import { useGLTF } from '@react-three/drei';
import model from '../assets/model/artijecta.glb?url';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import wifis from '../data/wifis';
import Wifi from './Wifi';

export default function HomeModel() {
  const gltf = useGLTF(model);
  const ref = useRef();
  const groupRef = useRef();
  useFrame(() => {
    groupRef.current.rotation.y += Math.PI / 2500;
  });
  return (
    <group ref={groupRef}>
      <primitive
        ref={ref}
        object={gltf.scene}
        scale={[2.5, 2.5, 2.5]}
      />
      {Object.keys(wifis).map((idx, wifi) => {
        return (
          <Wifi
            key={idx}
            pos={wifis[wifi].model.pos}
            sc={wifis[wifi].model.sc}
            idx={wifi}
          />
        );
      })}
    </group>
  );
}
