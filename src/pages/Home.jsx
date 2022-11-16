import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import Wifi from '../components/Wifi';
import wifis from '../data/wifis';
import Nav from '../components/Nav';
import HomeModel from '../components/HomeModel';
/**
 * - [x] 와이파이 위치 점 찍기 (10개)
 * - [x] 위치 점 클릭하면 팝업되는 창 만들고 정보 입력하기
 * - [x] 네비게이션 만들기
 * - [x] 앱 연결 페이지
 * - [ ] 스프레드 시트 변환하는 방법? 알아보고 페이지로 만들기
 * - [ ] 아티젝타 마지막 단서 페이지
 * - [x] 프로젝트 소개 페이지
 */

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
      <Canvas
        linear
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
        <HomeModel />
        {Object.keys(wifis).map((idx, wifi) => {
          return (
            <Wifi
              key={idx}
              pos={wifis[wifi].model.pos}
              idx={wifi}
            />
          );
        })}
      </Canvas>
    </HomeContainer>
  );
}
