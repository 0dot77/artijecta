import { Sphere, Html } from '@react-three/drei';
import { Suspense, useState } from 'react';
import styled from 'styled-components';
import wifis from '../data/wifis';

const WifiDataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const DataContainer = styled.div`
  width: 100%;
  height: 60%;
  padding-left: 2rem;
  p {
    margin-bottom: 0.1rem;
  }
`;

const Button = styled.button`
  width: 80%;
  height: 20%;
  background-color: #000000;
  border: none;
  color: white;
  font-size: 1.25rem;
  font-family: DOSGothic;
`;

const Wifi = ({ pos }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <Suspense>
      <Sphere
        position={pos}
        scale={[0.1, 0.1, 0.1]}
        onClick={() => setClicked((prev) => !prev)}
      >
        <meshBasicMaterial color="hotpink" />
      </Sphere>
      {clicked ? (
        <Html
          position={pos}
          style={{
            width: '20rem',
            height: '10rem',
            backgroundColor: 'rgba(255, 0, 240, 1)',
            marginTop: '2rem',
            fontFamily: 'DOSGothic',
          }}
        >
          <WifiDataContainer>
            <DataContainer>
              <p>관리번호 : {wifis[0].data.number}</p>
              <p>{wifis[0].data.address}</p>
              <p>
                x:{wifis[0].data.pos.x}, y:{wifis[0].data.pos.y}
              </p>
              <p>{wifis[0].data.wifiName}</p>
              <p>AP 이용량 : {wifis[0].data.amount}</p>
            </DataContainer>
            <Button>찾아가는 길</Button>
          </WifiDataContainer>
        </Html>
      ) : null}
    </Suspense>
  );
};

export default Wifi;
