import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import Wifi from '../components/Wifi';
import wifis from '../data/wifis';
import Nav from '../components/Nav';
import HomeModel from '../components/HomeModel';
import HomeMouse from '../components/HomeMouse';
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing';

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
      <Nav />
      <HomeMouse />
      <Canvas
        linear
        style={{
          width: '100%',
          heigth: '100%',
          backgroundColor: '#000000',
        }}
      >
        {/* <EffectComposer>
          <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={1}
            height={480}
          />
          <Bloom
            luminanceThreshold={0.25}
            luminanceSmoothing={1}
            height={300}
          />
          <Vignette
            eskil={false}
            offset={0.2}
            darkness={1.1}
          />
        </EffectComposer> */}
        <OrbitControls
          makeDefault
          target={[0, 0, 0]}
          enableDamping={true}
        />
        <HomeModel />
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
      </Canvas>
    </HomeContainer>
  );
}
