import { useGLTF } from '@react-three/drei';
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
