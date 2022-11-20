import { Sphere, Html } from '@react-three/drei';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import wifis from '../data/wifis';
import { useRecoilState } from 'recoil';
import { clueState } from '../data/atom';

const WifiDataContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const DataContainer = styled.div`
  width: 100%;
  padding-left: 2rem;
  padding-top: 2rem;
  p {
    margin-bottom: 0.1rem;
  }
`;

const Button = styled.button`
  width: 80%;
  height: 15%;
  background-color: #000000;
  border: none;
  color: white;
  font-size: ${(props) => (props.isBtnHovered ? '1rem' : '1.25rem')};
  font-family: DOSGothic;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const Cancel = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.5rem;
  position: absolute;
  left: 17rem;
  background: black;
  cursor: pointer;
`;

const HtmlWholeBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const HtmlBackground = styled.div`
  width: 20rem;
  height: 18rem;
  background-color: rgba(255, 0, 240, 1);
  right: 10rem;
  margin-top: 1rem;
`;

const Line = styled.hr`
  width: 100%;
  border: 1px solid rgba(255, 0, 240, 1);
  transform: rotate(-4deg);
`;

const Wifi = ({ pos, idx = 0, sc }) => {
  const [clicked, setClicked] = useState(false);
  const [isBtnHovered, setIsBtnHovered] = useState(false);
  const [isClue, setIsClue] = useRecoilState(clueState);
  const circleRef = useRef();
  const group = useRef();

  return (
    <group ref={group}>
      <Sphere
        ref={circleRef}
        position={pos}
        scale={sc}
        onClick={() => setClicked((prev) => !prev)}
      >
        <meshBasicMaterial
          color={[255, 0, 240]}
          toneMapped={false}
        />
      </Sphere>
      {clicked && !isClue ? (
        <Html
          position={pos}
          style={{
            width: '30rem',
            height: '18rem',
            right: '1rem',
            marginTop: '1rem',
            fontFamily: 'DOSGothic',
          }}
        >
          <Line />
          <HtmlBackground>
            <Cancel>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
                onClick={() => setClicked(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
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
              <Button
                onClick={() => {
                  window.open(wifis[idx].data.mapUrl);
                }}
                onMouseEnter={() => setIsBtnHovered(true)}
                onMouseLeave={() => setIsBtnHovered(false)}
                isBtnHovered={isBtnHovered}
              >
                {isBtnHovered ? <span>Directions to this spot &#62;</span> : <span>찾아가는 길 &#62;</span>}
              </Button>
            </WifiDataContainer>
          </HtmlBackground>
        </Html>
      ) : null}
    </group>
  );
};

export default Wifi;
