import styled from 'styled-components';
import menuIcon from '../assets/model/menu.gif';
import qr from '../assets/images/qr.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomeHoverText from './HomeHoverText';

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
  p {
    margin-bottom: 1rem;
    background-color: #000000;
    text-decoration: underline;
    &:hover {
      color: rgba(255, 0, 240, 1);
      cursor: pointer;
    }
    padding-left: 1rem;
  }

  .live {
    color: ${(props) => (props.liveClicked ? 'rgba(255, 0, 240, 1)' : 'white')};
  }

  .qr {
    opacity: ${(props) => (props.clicked ? 1 : 0)};
    color: ${(props) => (props.qrClicked ? 'rgba(255, 0, 240, 1)' : 'white')};
  }
  transition: opacity 2s linear forward;
`;

const QrContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
`;

const ImageBox = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relatvie;
  .back {
    width: 18rem;
  }

  .qr {
    position: absolute;
    width: 3rem;
  }
`;

const ClueContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: DOSGothic;
`;

const InputFieldBox = styled.div`
  width: 30rem;
  height: 15rem;
  color: white;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .title {
    text-align: center;
    font-size: 1rem;
  }
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
`;

const InputBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    width: 2rem;
    padding: 1rem;
    margin: 0.25rem;
  }
`;

const Nav = () => {
  const [clicked, setClicked] = useState(false);
  const [liveClicked, setLiveClicked] = useState(true);
  const [qrClicked, setQrClicked] = useState(false);
  const [clueClicked, setClueClicked] = useState(false);

  const [liveHovered, setLiveHovered] = useState(false);
  const [qrHovered, setQrHovered] = useState(false);
  const [wifiHovered, setWifiHovered] = useState(false);
  const [clueHovered, setClueHovered] = useState(false);
  const [aboutHovered, setAboutHovered] = useState(false);
  console.log(liveHovered);
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
            <HomeHoverText
              cn={'live'}
              onMouseEnter={() => setLiveHovered(true)}
              onMouseLeave={() => setLiveHovered(false)}
              isHover={liveHovered}
            />
            {/* <p className="live">아티젝타 서식지 탐색</p> */}
            <p
              className="qr"
              onClick={() => {
                setQrClicked((prev) => !prev);
                setLiveClicked(false);
              }}
            >
              APP 다운받기
            </p>
            <p
              className="public"
              onClick={() => nav('/all-public')}
            >
              전체 공공 와이파이 보기
            </p>
            <p
              className="last"
              onClick={() => setClueClicked((prev) => !prev)}
            >
              마지막 단서 보기
            </p>
            <p
              className="proect"
              onClick={() => {
                nav('/description');
              }}
            >
              본 프로젝트에 대해
            </p>
          </MenuContainer>
        ) : null}
      </NavContainer>
      {qrClicked ? (
        <QrContainer onClick={() => setQrClicked(false)}>
          <ImageBox>
            <img src={qr} />
          </ImageBox>
        </QrContainer>
      ) : null}
      {clueClicked ? (
        <ClueContainer onClick={() => setClueClicked((prev) => !prev)}>
          <InputFieldBox>
            <h2 className="title">어플에서 수집한 10자리 코드를 입력해주세요.</h2>
            <InputBox>
              <input
                className="1"
                type="number"
              />
              <input className="1" />
              <input className="1" />
              <input className="1" />
              <input className="1" />
              <input className="1" />
              <input className="1" />
              <input className="1" />
              <input className="1" />
              <input className="1" />
            </InputBox>
          </InputFieldBox>
        </ClueContainer>
      ) : null}
    </>
  );
};

export default Nav;
