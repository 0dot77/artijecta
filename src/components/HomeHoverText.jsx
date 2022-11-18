const title = {
  live: {
    kr: '아티젝타 서식지 탐색',
    en: 'Exploring Artijecta Habitat',
  },
  qr: {
    kr: 'APP 다운받기',
    en: 'Download APP',
  },
  wifi: {
    kr: '전체 공공 와이파이 보기',
    en: 'View All Public Wi-Fi',
  },
  clue: {
    kr: '마지막 단서 보기',
    en: 'Open the last clue',
  },
  about: {
    kr: '본 프로젝트에 대해',
    en: 'About this project',
  },
};

const HomeHoverText = ({ cn, isHover }) => {
  return <>{isHover ? <p>{title[cn].kr}</p> : <p className={cn}>{title[cn].en}</p>}</>;
};

export default HomeHoverText;
