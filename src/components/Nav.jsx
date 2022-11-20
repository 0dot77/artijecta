import styled from 'styled-components';
import menuIcon from '../assets/model/menu.gif';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeNavTitle from './HomeNavTitle';
import title from '../data/title';
import NavQr from './NavQr';
import NavLastClue from './NavLastClue';
import { useRecoilState } from 'recoil';
import { clueState } from '../data/atom';

const NavContainer = styled.div`
  position: absolute;
  margin-right: 1rem;
  z-index: 1000;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15rem;
  img {
    align-self: flex-end;
    right: 0;
    width: 50%;
    filter: ${(props) => (props.clicked ? `drop-shadow(3px 4px 4px rgba(255, 0, 240, 1))` : null)};
    &:hover {
      filter: drop-shadow(3px 4px 4px rgba(255, 0, 240, 1));
    }
    margin-bottom: 1rem;
  }
`;

const MenuContainer = styled.div`
  width: 100%;
  font-family: DOSGothic;
  color: white;
  font-size: 1rem;
  text-align: right;
  padding-left: 1rem;

  .live {
    color: ${(props) =>
      props.isMenuClicked !== null || props.isMenuClicked === 'live' ? 'white' : 'rgba(255, 0, 240, 1)'};
  }
`;

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(null);
  const [, setClue] = useRecoilState(clueState);
  const nav = useNavigate();

  return (
    <>
      <NavContainer clicked={clicked}>
        <img
          src={menuIcon}
          alt="icon"
          onClick={() => setClicked((prev) => !prev)}
        />
        {clicked ? (
          <MenuContainer
            clicked={clicked}
            isMenuClicked={isMenuClicked}
          >
            {Object.keys(title).map((idx, perTitle) => {
              return (
                <HomeNavTitle
                  key={idx}
                  origin={Object.keys(title)[perTitle]}
                  setIsMenuClicked={setIsMenuClicked}
                  isMenuClicked={isMenuClicked}
                  setClue={setClue}
                />
              );
            })}
          </MenuContainer>
        ) : null}
      </NavContainer>
      {isMenuClicked === 'qr' ? <NavQr setIsMenuClicked={setIsMenuClicked} /> : null}
      {isMenuClicked === 'wifi' ? nav('/all-public') : null}
      {isMenuClicked === 'clue' ? <NavLastClue setIsMenuClicked={setIsMenuClicked} /> : null}
      {isMenuClicked === 'about' ? nav('/description') : null}
    </>
  );
};

export default Nav;
