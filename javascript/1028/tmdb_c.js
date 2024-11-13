async function getNowPlayingMovies() {
  try {
    const baseURL = 'https://api.themoviedb.org/3/movie';
    const path = '/now_playing';
    const params = new URLSearchParams({
      api_key: 'eab8c9893e725b2e167187cef66bae3d',
      language: 'ko',
    });

    const URL = `${baseURL}${path}?${params}`;

    const response = await fetch(URL);
    const data = await response.json();

    const movies = data.results;
    return movies;
  
    //영화가 여러개여서 배열로 만든다.
    //평점이 7보다 큰

    //모든 영화에 대해서, 평점이 7이상인 영화를 담은 array를 만들자.
    
    function makeOver7Movies(movies) {

      const over7Movies = [];

      for (let movie of movies) {
      const voteAverage = movie.vote_average;

      if (voteAverage >= 7) {
      console.log(movie.title);
      over7Movies.push(movie);
    }
   }
    return over7Movies;
  }

  
    //함수
   
      //평점 이상이 7인 영화를 알기위해서
      
      // 모든 영화에 대해서,
      // 평점이
      // 7이상인 영화
      // 를 담은 array를 만들자


      //평점이 7이상인 영화
     
async function main() {
  // 1. 현재 상영중인 영화를 가져온다.
const movies = await getNowPlayingMovies();

const over7Movies = makeOver7Movies(movies);

const over7


//필터가 함수
//괄호 안에 argment가 파라미터임

getNowPlayingMovies();
