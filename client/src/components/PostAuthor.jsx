import { Link } from 'react-router-dom';
import Avatar from '../assets/avatar.jpg';

function PostAuthor({ createdAt }) {
  return (
    <Link to='/about' className='post__author'>
      <div className='post__author-avatar'>
        <img src={Avatar} alt='Avatar Picture'></img>
      </div>
      <div className='post__author-details'>
        <h5>By: Some Dude</h5>
        <small>{createdAt}</small>
      </div>
    </Link>
  );
}

export default PostAuthor;
