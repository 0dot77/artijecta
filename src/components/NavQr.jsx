import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import qr from '../assets/images/qr.png';
import { clueState } from '../data/atom';

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
  .back {
    width: 18rem;
  }

  .qr {
    position: absolute;
    width: 3rem;
  }
`;

const NavQr = ({ setIsMenuClicked }) => {
  const [, setClueState] = useRecoilState(clueState);
  return (
    <QrContainer
      onClick={() => {
        setIsMenuClicked(null);
        setClueState(false);
      }}
    >
      <ImageBox>
        <img src={qr} />
      </ImageBox>
    </QrContainer>
  );
};

export default NavQr;
