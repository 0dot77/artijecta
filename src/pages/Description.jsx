import styled from 'styled-components';

const Layout = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DescriptionContainer = styled.section`
  padding: 1rem;
  width: 50%;
  p {
    font-family: DOSGothic;
    color: white;
    line-height: 1.25;
  }
`;
const Description = () => {
  return (
    <Layout>
      <DescriptionContainer>
        <p>
          보이지 않지만 현재 문명 내 거대하게 몸집을 불려나가고 있는 ‘온라인 생태계’. 그 생태계에 자리잡은 소비 시스템
          속에서 인공 사물들의 데이터는 끊임없이 증식하며 그곳을 장악해 나가고 있다. 그곳에서 우리의 소비는 데이터
          증식을 일으키는 동시에, 우리의 몸이 거주하는 물질 세계로 까지 그들이 침범하게 한다. 공공 와이파이 시설이
          증가하고, 더 많은 사용자가 더 많은 트래픽을 사용하면서, 그 속도에 가속도가 붙는다. 누구에게나 무료로 무한히
          가능한 인터넷 연결은 온라인 생태계를 비옥하게 만들고 있다. 이 비옥한 환경은 ‘무엇’을 자라게 할까. 공공
          와이파이와 온라인 쇼핑몰에 대한이야기를 기반으로 인공 사물들의 데이터에서 탄생한 새로운 생명체,
          아티젝타(Artijecta(Artificial+Object+Data))를 포착한다.
        </p>
      </DescriptionContainer>
    </Layout>
  );
};

export default Description;
