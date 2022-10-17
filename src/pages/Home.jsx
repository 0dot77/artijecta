import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect } from 'react';
import styled from 'styled-components';
import HomeModel from '../components/HomeModel';
import { Html, OrbitControls, useProgress } from '@react-three/drei';

const HomeContainer = styled.main`
  width: 100%;
  height: 100vh;

  .progress {
    color: white;
    font-size: 10rem;
    text-align: center;
  }
`;

const Loader = () => {
  const { active, progress } = useProgress();
  useEffect(() => {
    console.log(active, progress);
  }, [active, progress]);
  return (
    <Html
      className="progress"
      center
    >
      {progress} % loaded
    </Html>
  );
};

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
          <Suspense fallback={<Loader />}>
            <HomeModel />
          </Suspense>
        </Canvas>
      </Suspense>
    </HomeContainer>
  );
}
