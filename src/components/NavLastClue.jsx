import { useState } from 'react';
import styled from 'styled-components';
import { MuiOtpInput } from 'mui-one-time-password-input';
import { useRecoilState } from 'recoil';
import { clueState } from '../data/atom';

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
  width: 70%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CancelContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1000;
`;

/*
- 번호를 입력해야하기 때문에, 따로 off를 할 수 있는 버튼이 있으면 좋을 것 같다.
*/

const NavLastClue = ({ setIsMenuClicked }) => {
  const [otp, setOtp] = useState('');
  const [pass, setPass] = useState(false);
  const [, setIsClue] = useRecoilState(clueState);

  const handleChange = (value) => {
    setOtp(value);
  };
  const handleComplete = (newValue) => {
    if (newValue === 'AJ10WFS8EN') {
      setPass(true);
    }
  };
  return (
    <ClueContainer>
      <CancelContainer
        onClick={() => {
          setIsMenuClicked(false);
          setIsClue(false);
        }}
      />
      {pass ? (
        <VideoContainer>
          <video
            controls
            width="100%"
          >
            <source
              src="https://gdurl.com/DAFe"
              type="video/mp4"
            ></source>
          </video>
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
