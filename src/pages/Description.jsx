import styled from 'styled-components';
import { useState } from 'react';
import logo1 from '../assets/images/logo1.png';
import logo2 from '../assets/images/logo2.png';

const Layout = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: DOSGothic;
  color: white;
  line-height: 1.5;
  cursor: default;
`;

const DescriptionContainer = styled.section`
  padding: 1rem;
  width: 50%;
  span {
    font-size: 0.75rem;
  }
`;

const SponsorContainer = styled.section`
  width: 100%;
  position: absolute;
  bottom: 0;
  color: white;
  display: flex;
  align-items: flex-end;
  margin-bottom: 1rem;
  padding: 1rem;
  p {
    font-size: 0.75rem;
    margin-left: 1rem;
  }
`;

const SponsorImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  margin: 0 0.5rem 0 2rem;
  img {
    width: 10rem;
    margin-right: 1rem;
  }

  img:nth-child(2) {
    margin-bottom: 0.5rem;
  }
`;

const CreditContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.75rem;
  justify-content: flex-start;
  margin-bottom: 0.5rem;
`;

const MakingDescription = styled.div`
  margin-bottom: 0.5rem;
`;

const Description = () => {
  const [isTextHovered, setIsTextHovered] = useState(null);

  return (
    <Layout>
      <DescriptionContainer
        onMouseEnter={() => setIsTextHovered('main')}
        onMouseLeave={() => setIsTextHovered(null)}
      >
        {isTextHovered === 'main' ? (
          <p>
            The ‘online ecosystem’ is invisible, yet it is growing immense within our current civilization. In the
            consumerist system established within that ecology, the artificial objects’ data endlessly proliferates,
            taking over the system. There, our consumption triggers the proliferation of data, while simultaneously
            allowing the invasion of data into the material world, where our bodies reside. With more public wifi
            facilities and more users leading to more traffic, the speed is accelerated. Internet connection made
            available free and without limit to anyone renders the online ecosystem fertile.What will this fertile
            environment yield? Discovering Artijecta (Artificial+Object+Data), a new lifeform born out of artificial
            objects’ data based on stories of public wifi and online shopping malls. They have established themselves in
            places where public Wi-Fi is actively used and are increasing their influence.
          </p>
        ) : (
          <p>
            <span>본 프로젝트는 </span>
            보이지 않지만 현재 문명 내 거대하게 몸집을 불려나가고 있는 ‘온라인 생태계’. 그 생태계에 자리잡은 소비 시스템
            속에서 인공 사물들의 데이터는 끊임없이 증식하며 그곳을 장악해 나가고 있다. 그곳에서 우리의 소비는 데이터
            증식을 일으키는 동시에, 우리의 몸이 거주하는 물질 세계로 까지 그들이 침범하게 한다. 공공 와이파이 시설이
            증가하고, 더 많은 사용자가 더 많은 트래픽을 사용하면서, 그 속도에 가속도가 붙는다. 누구에게나 무료로 무한히
            가능한 인터넷 연결은 온라인 생태계를 비옥하게 만들고 있다. 이 비옥한 환경은 ‘무엇’을 자라게 할까. 공공
            와이파이와 온라인 쇼핑몰에 대한 이야기를 기반으로 인공 사물들의 데이터에서 탄생한 새로운 생명체,
            아티젝타(Artijecta(Artificial+Object+Data))를 포착한다. 그들은 공공 와이파이가 활발하게 사용되는 곳에 터를
            잡고, 자신들의 영향력을 불려나가고 있다. 그들의 정체는 무엇일까.
          </p>
        )}
      </DescriptionContainer>
      <SponsorContainer>
        <CreditContainer
          onMouseEnter={() => setIsTextHovered('credit')}
          onMouseLeave={() => setIsTextHovered(null)}
        >
          {isTextHovered === 'credit' ? (
            <>
              <p>Project manage │ Yena Park</p>
              <p>Design │ Yena Park</p>
              <p>App development │ Subong Jung(Plinqer)</p>
              <p>Web development │ Taeyang Yoo</p>
              <p>Consultation │ Youngjin Oj, Eugene Park, Sunju Choi, Yeji Hong</p>
              <p>Translation │ Hanjun Kim</p>
              <p>Production support │ Studio Huinsangja, Yuna Song, Haeryun Lee, Sungho Park</p>
              <p>Review │ Malgeum Kim, Jaehyoung Im, Junhyeok Park</p>
            </>
          ) : (
            <>
              <p>기획 및 제작 총괄 │ 박예나</p>
              <p>디자인 │ 박예나</p>
              <p>앱 개발 │ 정수봉(플링커)</p>
              <p>웹 개발 │ 유태양</p>
              <p>자문 │ 오영진, 박유진, 최선주, 홍예지</p>
              <p>번역 │ 김한준</p>
              <p>제작 도움 │ 스튜디오 흰상자, 송유나, 이해련, 박성호</p>
              <p>리뷰 │ 박준혁, 김맑음, 임재형</p>
            </>
          )}
        </CreditContainer>
        <SponsorImageContainer>
          <img
            src={logo2}
            alt="logo"
          />
          <img
            src={logo1}
            alt="logo"
          />
        </SponsorImageContainer>
        <MakingDescription
          onMouseEnter={() => setIsTextHovered('sponsor')}
          onMouseLeave={() => setIsTextHovered(null)}
        >
          {isTextHovered === 'sponsor' ? (
            <p>※ This project was published with the support of “2022 ARKO Art & Tech"</p>
          ) : (
            <p>※ 본 프로젝트는 2022년 한국문화예술위원회 예술과기술융합지원사업의 지원을 받아 제작되었습니다.</p>
          )}
        </MakingDescription>
      </SponsorContainer>
    </Layout>
  );
};

export default Description;
