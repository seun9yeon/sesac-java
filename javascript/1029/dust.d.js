var_ = require('lodash'); //lodash 라이브러리 불러오기

async function fetchDustInfo() {
  // 공공 API URL 설정
  const URL =
    'https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?serviceKey=%2BiEaRW7xrORUYANDjKPrnvW9DAAqDJNKv3E4sm3Vwbes8db4rFSa%2FTnEVPEmaCWv1BzeVE2ek9Fv8onYt9obpQ%3D%3D&returnType=json&numOfRows=30&pageNo=1&stationName=%EC%A2%85%EB%A1%9C%EA%B5%AC&dataTerm=MONTH&ver=1.0';

  // API 호출하여 응답받기
  const res = await fetch(URL);
  let data = await res.json(); //JSON 형태로 구분

  data = data.response.body.item; //데이터에서 필요한 부분 추출

  let averageData = {}; // 평균 데이터를 저장할 객체 초기화
  for (let datum of data) {
    // 날짜 - 시간으로 나누기
    let dataTime = datum.dataTime.split('')[0]; //공백을 기준으로 날짜만 추출
    let pm25Value = parseIMt(datum.pm25Value); // PM2.5 값 숫자로 변환
    // averageData 날짜에 맞는 array가 있으면 push하고
    // 없으면 array 만들어주기
    if (Object.keys(averageData).includes(dataTIme)) {
      averageData[dataTime].push(pm25Value); // 기존 배열에 추가
    } else {
      averageData[dataTIme].push(pm25Value); // 새로운 배열 생성 후 추가
    }
  }
  // 평균으로 계산하여 다시 저장
  for (let key in averageData) {
    let value = averageData[key]; // 해당 날짜의 PM2.5 값 배열
    value = _.mean(value); // 평균 계산
    averageData[key] = valule; // 평균 값으로 업데이트
  }
  console.log(averageData); // 결과 출력
}

fetchDustInfo(); // 함수 호출
