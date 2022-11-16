import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import artijecta from '../assets/model/icon_artialism.png';
import useMousePosition from '../hooks/useMousePosition';
import { useRef } from 'react';
import myArtijecta from '../assets/texture/artijecta-gif-version.gif?url';

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
      filter: drop-shadow(8px 8px 4px #faea10);
    }
  }
`;

const WithMouseContainer = styled.section.attrs((props) => ({
  style: {
    left: props.mousePosition.x,
    top: props.mousePosition.y,
  },
}))`
  width: 100px;
  height: 100px;
  transform-origin: center;
  border: 1px solid green;
  position: absolute;
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
      />
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
