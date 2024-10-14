import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';

function PostCard({ postID, thumbnail, user, title, description, imgAlt }) {
  return (
    <article className='post'>
      <img src={thumbnail} alt={imgAlt} className='post-img' />

      <div className='post__content'>
        <Link to={`/blog/${postID}`}>
          <h3>{title}</h3>
        </Link>
        <p>{description}</p>
        <div className='post__footer'>
          <PostAuthor createdAt={user.created_at} />
        </div>
      </div>
    </article>
  );
}

export default PostCard;
