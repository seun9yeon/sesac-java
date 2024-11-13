async function getNowPlayingMovies() {
  try {
    const baseURL = '';
    const path = '';
    const params = new URLSearchParams({
      api_key: '',
      language: 'ko',
    });

    let URL = `${baseURL}${path}?${params}`;

    const response = await fetch(URL);
    const data = await response.json();

    const movies = data.results;

    const maxVoteMove = movie.reduce((acc, cur) => {
      const accVoteAverage = acc.vote_average;
      const curVoteAverage = cur.vote_average;

      if (accVoteAverage > curVoteAverage) {
        return acc;
      } else if (accVoteAverage < curVoteAverage) {
        return cur;
      }
    });
    const movieId = maxVoteMovie.id;
    console.log(movieId);

    URL = `${baseURL}/${movieId}?${params}`;

    const response2 = await fetch(URL);
    const data2 = aw
  }
}