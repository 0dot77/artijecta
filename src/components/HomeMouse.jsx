import styled from 'styled-components';
import { useState } from 'react';
import mouse from '../assets/images/mouse.gif';
import { useEffect } from 'react';

const HomeMouseContainer = styled.div`
  z-index: 1000;
  position: absolute;
  bottom: 0;
  right: 45%;
  img {
    position: relative;
    width: 5rem;
  }
`;

const HomeMouse = () => {
  const [isTimeOvered, setIsTimeOver] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsTimeOver(true);
    }, 23000);
  }, []);

  return (
    <>
      {isTimeOvered ? null : (
        <HomeMouseContainer>
          <img
            src={mouse}
            alt="mouse"
          />
        </HomeMouseContainer>
      )}
    </>
  );
};

export default HomeMouse;
