import { useState } from 'react';
import styled from 'styled-components';
import title from '../data/title';

const Menu = styled.p`
  margin-bottom: 1rem;
  background-color: #000000;
  text-decoration: underline;
  color: ${(props) => (props.origin === props.isMenuClicked ? 'rgba(255, 0, 240, 1)' : 'white')};
  &:hover {
    color: rgba(255, 0, 240, 1);
    cursor: pointer;
  }
`;

const HomeNavTitle = ({ origin, setIsMenuClicked, isMenuClicked }) => {
  const [isHover, setIshovered] = useState(false);

  const handleMouseHover = () => {
    setIshovered(true);
  };
  const handleMouseLeave = () => {
    setIshovered(false);
  };

  return (
    <>
      <div
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseLeave}
        onClick={() => {
          isMenuClicked ? setIsMenuClicked(null) : setIsMenuClicked(origin);
        }}
      >
        {isHover ? (
          <Menu
            className={origin}
            isMenuClicked={isMenuClicked}
            origin={origin}
          >
            {title[origin].en}
          </Menu>
        ) : (
          <Menu
            className={origin}
            isMenuClicked={isMenuClicked}
            origin={origin}
          >
            {title[origin].kr}
          </Menu>
        )}
      </div>
    </>
  );
};

export default HomeNavTitle;
