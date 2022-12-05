import { useState } from 'react';
import styled from 'styled-components';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { useRecoilState } from 'recoil';
import { clueState, soundState } from '../data/atom';

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
  width: 80%;
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
  z-index: 10000;
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

const MuiOtpInputStyled = styled(MuiOtpInput)`
  display: flex;
  max-width: 100%;
  margin-inline: auto;
  padding: 1rem;
`;

const VideoContainer = styled.div`
  width: 80vw;
  height: 45vw;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 10000;
`;

const CancelContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1000;
`;

const NavLastClue = ({ setIsMenuClicked }) => {
  const [otp, setOtp] = useState('');
  const [pass, setPass] = useState(false);
  const [, setIsClue] = useRecoilState(clueState);
  const [, setSoundState] = useRecoilState(soundState);

  const handleChange = (value) => {
    setOtp(value);
  };
  const handleComplete = (newValue) => {
    if (newValue === 'AJ10WFS8EN') {
      setPass(true);
      if (soundState) {
        setSoundState(false);
      }
    }
  };
  return (
    <ClueContainer>
      <CancelContainer
        onClick={() => {
          setIsMenuClicked(null);
          setIsClue(false);
        }}
      />
      {pass ? (
        <VideoContainer>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/FcoHxhCAqLA?amp;autoplay=1?rel=0&vq=hd1080"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoContainer>
      ) : (
        <InputFieldBox>
          <h2 className="title">앱에서 수집한 10자리 코드를 입력해주세요.</h2>
          <InputBox>
            <MuiOtpInputStyled
              value={otp}
              onChange={handleChange}
              onComplete={handleComplete}
              length={10}
            />
          </InputBox>
        </InputFieldBox>
      )}
    </ClueContainer>
  );
};

export default NavLastClue;
