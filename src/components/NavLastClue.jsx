import { useState } from 'react';
import styled from 'styled-components';
import { MuiOtpInput } from 'mui-one-time-password-input';

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
  width: 60%;
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

const MuiOtpInputStyled = styled(MuiOtpInput)`
  display: flex;
  gap: 30px;
  max-width: 650px;
  margin-inline: auto;
`;

const VideoContainer = styled.div`
  width: 50%;
  height: 15rem;
  color: white;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

/*
- 번호를 입력해야하기 때문에, 따로 off를 할 수 있는 버튼이 있으면 좋을 것 같다.
*/

const NavLastClue = () => {
  const [otp, setOtp] = useState('');
  const [pass, setPass] = useState(false);

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
      {pass ? (
        <VideoContainer>
          <h1>영상자리</h1>
        </VideoContainer>
      ) : (
        <InputFieldBox>
          <h2 className="title">어플에서 수집한 10자리 코드를 입력해주세요.</h2>
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
