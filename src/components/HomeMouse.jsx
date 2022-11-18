import styled from 'styled-components';
import { useState } from 'react';
import mouse from '../assets/images/mouse.gif';

const HomeMouseContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  img {
    margin-bottom: 2rem;
    position: relative;
    width: 5rem;
  }
`;

const HomeMouse = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      {clicked ? null : (
        <HomeMouseContainer onClick={() => setClicked(true)}>
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
