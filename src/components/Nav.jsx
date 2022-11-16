import styled from 'styled-components';
import menuIcon from '../assets/model/menu.gif';
import qrBackground from '../assets/images/qr-1.png';
import qr from '../assets/images/qr-2.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    &:hover {
      filter: drop-shadow(3px 4px 4px #faea10);
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
    &:hover {
      color: rgba(255, 0, 240, 1);
      cursor: pointer;
    }
  }

  .qr {
    opacity: ${(props) => (props.clicked ? 1 : 0)};
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
  const [qrClicked, setQrClicked] = useState(false);
  const [clueClicked, setClueClicked] = useState(false);
  const nav = useNavigate();
  return (
    <>
      <NavContainer>
        <img
          src={menuIcon}
          alt="icon"
          onClick={() => setClicked((prev) => !prev)}
        />
        {clicked ? (
          <MenuContainer clicked={clicked}>
            <p
              className="qr"
              onClick={() => setQrClicked((prev) => !prev)}
            >
              Artijecta Caputre App
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
              아티젝타 마지막 단서 보기
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
            <img
              className="back"
              src={qrBackground}
              alt="qrBackgroundImage"
            />
            <img
              className="qr"
              src={qr}
              alt="qr"
            />
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
