import styled, { keyframes } from 'styled-components';
import artijecta from '../assets/model/icon_artialism.png';
const IconAnimi = keyframes`
    0%{
        transform : rotate(0deg);
    }

    100% {
        transform : rotate(360deg);
    }
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 10rem;
  transform: translate(-50%, -50%);
  img {
    width: 100%;
    animation: ${IconAnimi} 10s linear infinite;
  }
`;

const LoadingCanvas = () => {
  return (
    <>
      <ImageContainer>
        <img
          src={artijecta}
          alt="artijecta icon"
        />
      </ImageContainer>
    </>
  );
};

export default LoadingCanvas;
