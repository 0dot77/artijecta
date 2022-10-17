import { useGLTF } from '@react-three/drei';
import model from '../assets/model/artijecta_model.glb?url';

export default function HomeModel() {
  const gltf = useGLTF(model);
  return (
    <primitive
      object={gltf.scene}
      scale={[0.5, 0.5, 0.5]}
    ></primitive>
  );
}
