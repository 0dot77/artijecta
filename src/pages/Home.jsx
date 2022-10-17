import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import HomeModel from '../components/HomeModel';
import { Loader, OrbitControls } from '@react-three/drei';

const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #000000;

  .progress {
    color: white;
    font-size: 10rem;
    text-align: center;
  }
`;

export default function Home() {
  return (
    <HomeContainer>
      <Canvas
        style={{
          width: '100%',
          heigth: '100%',
          backgroundColor: '#000000',
        }}
      >
        <Loader />
        <OrbitControls
          makeDefault
          target={[0, 0, 0]}
          enableDamping={true}
        />
        <ambientLight />
        <HomeModel />
      </Canvas>
    </HomeContainer>
  );
}
