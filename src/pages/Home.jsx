import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import HomeModel from '../components/HomeModel';
import { Loader, OrbitControls } from '@react-three/drei';
import { EffectComposer } from '@react-three/postprocessing';
import { Glitch } from '@react-three/postprocessing';
import { GlitchMode } from 'postprocessing';

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
        <EffectComposer>
          <Glitch
            delay={[1.5, 3.5]} // min and max glitch delay
            duration={[0.5, 1]} // min and max glitch duration
            strength={[1, 2]} // min and max glitch strength
            mode={GlitchMode.SPORADIC} // glitch mode
            active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
            ratio={0} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
            dtSize={5}
          />
        </EffectComposer>
      </Canvas>
    </HomeContainer>
  );
}
