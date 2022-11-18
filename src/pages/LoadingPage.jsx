import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import artijecta from '../assets/model/icon_artialism.png';

const Layout = styled.main`
  width: 100%;
  height: 100vh;
`;

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
  background-position: center;
  background: #000000;
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
      width: 11rem;
    }
  }
`;

const LoadingPage = () => {
  const nav = useNavigate();

  return (
    <Layout>
      <BackgroundContainer />
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
