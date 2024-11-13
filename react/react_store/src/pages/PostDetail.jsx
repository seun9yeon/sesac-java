import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

export default function PostDetail() {
  const { postId } = useParams();

  const posts = useSelector((state) => state.posts);
  const [post, setPost] = useState();

  setPost(post.find((post) => post.id === parseInt(postId)));

  // const location = useLocation();
  // const { post } = location.state;
  // const { title, content } = post;

  return (
    <div>
      detail
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
}
