import styled from 'styled-components';
import menuIcon from '../assets/model/menu.gif';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeNavTitle from './HomeNavTitle';
import title from '../data/title';
import NavQr from './NavQr';
import NavLastClue from './NavLastClue';

const NavContainer = styled.div`
  position: absolute;
  margin-right: 1rem;
  z-index: 1000;
  right: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12.5rem;
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
    color: ${(props) => (props.liveClicked ? 'rgba(255, 0, 240, 1)' : 'white')};
  }

  .qr {
    opacity: ${(props) => (props.clicked ? 1 : 0)};
    color: ${(props) => (props.qrClicked ? 'rgba(255, 0, 240, 1)' : 'white')};
  }
  transition: opacity 2s linear forward;
`;

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const [liveClicked, setLiveClicked] = useState(true);
  const [qrClicked, setQrClicked] = useState(false);
  const [clueClicked, setClueClicked] = useState(false);

  const [isMenuClicked, setIsMenuClicked] = useState(null);

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
            liveClicked={liveClicked}
            qrClicked={qrClicked}
          >
            {Object.keys(title).map((idx, perTitle) => {
              return (
                <HomeNavTitle
                  key={idx}
                  origin={Object.keys(title)[perTitle]}
                  setIsMenuClicked={setIsMenuClicked}
                  isMenuClicked={isMenuClicked}
                />
              );
            })}
          </MenuContainer>
        ) : null}
      </NavContainer>
      {isMenuClicked === 'live' ? null : null}
      {isMenuClicked === 'qr' ? <NavQr setIsMenuClicked={setIsMenuClicked} /> : null}
      {isMenuClicked === 'wifi' ? null : null}
      {isMenuClicked === 'clue' ? <NavLastClue setIsMenuClicked={setIsMenuClicked} /> : null}
      {isMenuClicked === 'about' ? nav('/description') : null}
    </>
  );
};

export default Nav;
