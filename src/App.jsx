import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import Router from './Router';
import { RecoilRoot } from 'recoil';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  html, body {
    width:100%;
    height:100vh; 
    overflow: hidden;

  }

  /* FONT */

  @font-face {
    font-family: 'DOSGothic';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_eight@1.0/DOSGothic.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

const Copyright = styled.div`
  position: absolute;
  color: gray;
  bottom: 0;
  right: 0;
  margin: 0.5rem;
  font-size: 0.75rem;
`;

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <Router />
      <Copyright>© Yena Park Inc.</Copyright>
    </RecoilRoot>
  );
}

export default App;
