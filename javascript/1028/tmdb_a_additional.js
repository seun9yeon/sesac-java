async function getPopularMovies() {
  try {
    const baseURL = 'https://api.themoviedb.org/3/movie';
    const path = '/now_playing';
    const params = new URLSearchParams({
      api_key: 'eab8c9893e725b2e167187cef66bae3d',
      language: 'ko',
    });
    // const params = 'api_key=eab8c9893e725b2e167187cef66bae3d&language=ko';

    const URL = `${baseURL}${path}?${params}`;
    // const URL =
    //   'https://api.themoviedb.org/3/movie/popular?api_key=eab8c9893e725b2e167187cef66bae3d';

    const response = await fetch(URL);
    const data = await response.json();

    const movies = data.results;
    const my_movie = {
      title: 'sesac the movie',

      vote_average: 10.0,
      vote_count: 1,
    };
    movies.push(my_movie);

    maxVoteAverage = 0;
    maxVoteAverage = null;
    minVoteCount = 100;

    for (let movie of movies) {
      let voteAverage = movie.vote_average;
      let voteCount = movie.vote_count;

      if (voteCount < minVoteCount) continue;

      if (voteAverage > maxVoteAverage) {
        maxVoteAverage = voteAverage;
        maxVoteAverage = movie;
      }
    }

    console.log(maxVoteAverage);
    console.log(maxVoteMovie.title);
  } catch (error) {
    console.error('Error:', error);
  }
}

getNowPlayingMovies();
