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
  height: 50%;
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

const Cancel = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.25rem;
  border-radius: 50%;
  position: absolute;

  svg {
    &:hover {
      stroke: #000000;
    }
  }
`;

const Wifi = ({ pos, idx = 0 }) => {
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
            height: '20rem',
            backgroundColor: 'rgba(255, 0, 240, 1)',
            marginTop: '2rem',
            fontFamily: 'DOSGothic',
          }}
        >
          <Cancel>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="w-6 h-6"
              onClick={() => setClicked(false)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Cancel>

          <WifiDataContainer>
            <DataContainer>
              <p>관리번호 : {wifis[idx].data.number}</p>
              <p>주소 : {wifis[idx].data.address}</p>
              <p>
                x:{wifis[idx].data.pos.x}, y:{wifis[idx].data.pos.y}
              </p>
              <p>이름 : {wifis[idx].data.wifiName}</p>
              <p>종류 : {wifis[idx].data.category}</p>
              <p>기간 : {wifis[idx].data.date}</p>
              <p>AP 이용량 : {wifis[idx].data.amount}</p>
              <p>공유기 IP 주소 : {wifis[idx].data.ipAddress}</p>
            </DataContainer>
            <Button>찾아가는 길</Button>
          </WifiDataContainer>
        </Html>
      ) : null}
    </Suspense>
  );
};

export default Wifi;
