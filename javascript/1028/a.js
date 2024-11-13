// 현재 상영 중인 영화 중 평점이 가장 높은 영화를 찾으시오.

async function getNowPlayingMovies() {
  try {
    const baseURL = 'https://api.themoviedb.org/3/movie'; // TMDB API의 기본 URL
    const path = '/now_playing'; // 현재 상영 중인 영화를 요청하기 위한 엔드포인트
    const params = new URLSearchParams({
      // API 호출에 필요한 쿼리 파라미터 생성
      api_key: 'eab8c9893e725b2e167187cef66bae3d', // TMDB API 키
      language: 'ko', // 한국어로 응답 받기 위한 설정
    });

    // 완전한 URL을 생성 (기본 URL + 경로 + 쿼리 파라미터)
    const URL = `${baseURL}${path}?${params}`;

    // fetch 함수를 사용하여 API를 호출하고, 응답을 기다림
    const response = await fetch(URL);
    const data = await response.json();

    // 현재 상영 중인 영화 목록을 가져옴
    const movies = data.results;

    // 최대 평점을 저장할 변수 초기화 (0으로 시작)
    let maxVoteAverage = 0;

    // 최대 평점을 가진 영화 객체를 저장할 변수 초기화
    let maxVoteMovie = null;

    // 영화 목록을 순회하면서 최대 평점을 가진 영화를 찾음
    for (let movie of movies) {
      // 현재 영화의 평점 가져오기
      let voteAverage = movie.vote_average;

      // 현재 영화의 평점이 최대 평점보다 높으면
      if (voteAverage > maxVoteAverage) {
        // 최대 평점을 업데이트
        maxVoteAverage = voteAverage;
        // 최대 평점을 가진 영화 객체를 업데이트
        maxVoteMovie = movie;
      }
    }

    // 가장 높은 평점을 출력
    console.log(maxVoteAverage);

    //해당 영화의 제목을 출력
    console.log(maxVoteMovie.title);
  } catch (error) {
    //오류가 발생하면 콘솔에 오류 메세지 출력
    console.error('Error:', error);
  }
}

// 함수를 호출하여 전체 프로세스 실행
getNowPlayingMovies();
