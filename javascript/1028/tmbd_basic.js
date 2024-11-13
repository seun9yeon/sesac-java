async function getPost() {
  try {
    const baseURL = 'https://api.themoviedb.org/3/movie';
    // const path = '/popular';
    const path = 'account_id';
    const params = new URLSearchParams({
      api_key: 'eab8c9893e725b2e167187cef66bae3d',
      language: 'ko',
    });
    // const params = 'api_key=eab8c9893e725b2e167187cef66bae3d';

    const URL = `${baseURL}${path}?${params}`;
    // const URL =
    //   'https://api.themoviedb.org/3/movie/popular?api_key=eab8c9893e725b2e167187cef66bae3d';

    const response = await fetch(URL);
    const data = await response.json();

    const movies = data.results;
    console.log(movies[0]);

    console.log(movie.vote_average);
  } catch (error) {
    console.error('Error:', error);
  }
}

getPost();
