const baseURL = 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty';
const path = 
const params = 
  api_key: ''

const URL = `${baseURL}${path}?${params}`;

const city = (전국, 서울, 부산, 대구, 인천, 광주, 대전, 울산, 경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주, 세종)


stationName = 'pm25Value'

// 시도별 실시간 측정정보 조회에서  확인 가능한 시도 이름을 전부 작성하시오.
// 시도 이름
//(전국, 서울, 부산, 대구, 인천, 광주, 대전, 울산, 경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주, 세종)

//시도별 실시간 측정정보 조회의 서울의 데이터에 대해,
// 초 미세먼지 농도가 가장 낮은 stationName을 찾으시오.
// 측정소명	stationName	30	필수	중구	측정소명

// 시도별 실시간 측정정보 조회의 서울의 데이터를
//  stationName으로 접근하기 쉬운 자료구조로 재구성하시오.
// 그런 자료구조는 무엇일까?

// `종로구`의 `pm10Value`, `pm25Value`의 1달치 데이터를 정리하시오.
// 1달치 데이터는 어떻게 가져올까?
