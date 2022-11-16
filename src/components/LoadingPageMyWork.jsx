import { Image, useTexture } from '@react-three/drei';
import { Suspense } from 'react';
import artijectaTexture from '../assets/texture/artijecta-gif-version.gif';

const LoadingPageMyWork = () => {
  const texture = useTexture(artijectaTexture);
  return (
    <Suspense fallback={null}>
      <Image
        texture={texture}
        scale={[10, 10]}
      />
    </Suspense>
  );
};

export default LoadingPageMyWork;
