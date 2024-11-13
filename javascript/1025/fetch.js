async function getPostById(postId) {
  const response = await fetch(
fetch('https://jsonplaceholder.typicode.com/posts/1')
  );
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));
}

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response,json();
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.error(error));
}