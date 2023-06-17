import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faChevronUp } from '@fortawesome/free-solid-svg-icons';
export const ETC = [
  {
    id: '1',
    value: '· 개인정보 처리방침',
  },
  {
    id: '2',
    value: '· 이용약관',
  },
  {
    id: '3',
    value: '· 사이트맵',
  },
  {
    id: '4',
    value: '· 한국의 변경된 환불 정책',
  },
  {
    id: '5',
    value: '· 회사 세부정보',
  },
];

export const INFO_CATEGORY = [
  {
    infoId: '1',
    infoValue: '스페이스어라운드 지원',
    subInfo: [
      { subInfoId: 10, subInfoValue: '도움말 센터' },
      { subInfoId: 11, subInfoValue: '장애인 지원' },
      { subInfoId: 12, subInfoValue: '예약 취소 옵션' },
      { subInfoId: 13, subInfoValue: '이웃 민원 신고' },
    ],
  },
  {
    infoId: '2',
    infoValue: '커뮤니티',
    subInfo: [
      { subInfoId: 20, subInfoValue: '재난 구호 숙소' },
      { subInfoId: 21, subInfoValue: '차별 철폐를 위한 노력' },
    ],
  },
  {
    infoId: '3',
    infoValue: '호스팅',
    subInfo: [
      { subInfoId: 30, subInfoValue: '당신을 공간을 공유하세요' },
      { subInfoId: 31, subInfoValue: '호스트를 위한 에어커버' },
      { subInfoId: 32, subInfoValue: '호스팅 자료 둘러보기' },
      { subInfoId: 33, subInfoValue: '책임감 있는 호스팅' },
    ],
  },
  {
    infoId: '4',
    infoValue: '스페이스어라운드',
    subInfo: [
      { subInfoId: 40, subInfoValue: '뉴스룸' },
      { subInfoId: 41, subInfoValue: '새로운 기능에 대해 알아보기' },
      { subInfoId: 42, subInfoValue: '채용정보' },
      { subInfoId: 43, subInfoValue: '투자자 정보' },
    ],
  },
];

export const RIGHT_ETC = [
  {
    id: '1',
    value: ' 한국어(KR)',
    icon: <FontAwesomeIcon icon={faGlobe} />,
  },
  {
    id: '2',
    value: '₩ KRW',
    icon: null,
  },
  {
    id: '3',
    value: '지원 및 참고 자료 ',
    icon: <FontAwesomeIcon icon={faChevronUp} />,
  },
];
