import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import Wifi from '../components/Wifi';
import wifis from '../data/wifis';
import Nav from '../components/Nav';
import HomeModel from '../components/HomeModel';
import HomeMouse from '../components/HomeMouse';
import { EffectComposer, DepthOfField, Bloom, Noise, Vignette } from '@react-three/postprocessing';

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
        gl={{
          powerPreference: 'high-performance',
          alpha: false,
          antialias: false,
          stencil: false,
          depth: false,
        }}
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
        <EffectComposer
          multisampling={8}
          disableNormalPass={true}
        >
          <DepthOfField
            focusDistance={0}
            focalLength={0.2}
            bokehScale={0.5}
            height={500}
          />
          <Bloom
            luminanceThreshold={0.1}
            luminanceSmoothing={0.1}
            width={500}
            height={500}
            opacity={2}
            intensity={0.05}
            mipmapBlur
          />
          <Noise opacity={0.25} />
          <Vignette
            eskil={false}
            offset={0.1}
            darkness={1.1}
          />
        </EffectComposer>
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
