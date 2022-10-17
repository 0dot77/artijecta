import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import styled from 'styled-components';
import HomeModel from '../components/HomeModel';
import { OrbitControls } from '@react-three/drei';

const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;
`;

export default function Home() {
  return (
    <HomeContainer>
      <Suspense>
        <Canvas
          style={{
            width: '100%',
            heigth: '100%',
            backgroundColor: '#000000',
          }}
        >
          <OrbitControls
            makeDefault
            target={[0, 0, 0]}
            enableDamping={true}
          />
          <ambientLight />
          <HomeModel />
        </Canvas>
      </Suspense>
    </HomeContainer>
  );
}
