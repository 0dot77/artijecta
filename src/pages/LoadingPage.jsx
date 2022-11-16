import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import artijecta from '../assets/model/icon_artialism.png';
import useMousePosition from '../hooks/useMousePosition';
import { useRef } from 'react';
import myArtijecta from '../assets/texture/artijecta-gif-version.gif?url';
import { useEffect } from 'react';

/*
- [x] 로고 (누르면 홈으로 이동)
- [x] 마우스 움직일 때마다 랜덤한 정보 출력
    - [ ] 함께 나타낼 정보 작업하기
- [x] 로고 뒤에 내 작업 (작업을 텍스쳐로 입히고...)
*/

const Layout = styled.main`
  width: 100%;
  height: 100vh;
`;

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  background-image: url(${myArtijecta});
  /* background-repeat: no-repeat; */
  background-position: center;
  opacity: 0.95;
`;

const IconAnimi = keyframes`
    0%{
        transform : rotate(0deg);
    }

    100% {
        transform : rotate(360deg);
    }
`;

const IconContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    animation: ${IconAnimi} 10s linear infinite;
    width: 10rem;
    &:hover {
      filter: drop-shadow(3px 4px 4px #faea10);
    }
  }
`;

const WithMouseContainer = styled.section.attrs((props) => ({
  style: {
    left: props.mousePosition.x,
    top: props.mousePosition.y,
  },
}))`
  transform-origin: center;
  position: absolute;
  margin: 1rem;
`;

const MouseWithTextContainer = styled.div`
  font-family: DOSGothic;
  color: white;
  p {
    line-height: 1.25;
    color: rgba(0, 255, 0, 1);
  }
`;

const LoadingPage = () => {
  const nav = useNavigate();
  const mouse = useRef();
  const mousePosition = useMousePosition();

  return (
    <Layout>
      <BackgroundContainer />
      <WithMouseContainer
        ref={mouse}
        mousePosition={mousePosition}
      >
        <MouseWithTextContainer>
          <p>
            충돌감지 기능과 넘어짐 감지 기능이 응급 서비스에 자동으로 연결해줍니다. 오래 가도록 설계된 아름다움. 이전
            세대와 비교한 결과입니다. 5G 지원에 대한 자세한 내용은 이동통신사에 문의하거나. 아웃도어 코트에 적합하도록
            더 넓게 제작된 버전으로.
          </p>
        </MouseWithTextContainer>
      </WithMouseContainer>
      <IconContainer>
        <img
          src={artijecta}
          alt="artijecta icon"
          onClick={() => {
            nav('/home');
          }}
        />
      </IconContainer>
    </Layout>
  );
};

export default LoadingPage;
