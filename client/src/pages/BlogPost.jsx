import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchIndividualPost } from '../store';
import useThunk from '../hooks/useThunk';
import Skeleton from '../components/Skeleton';
import PostAuthor from '../components/PostAuthor';

function BlogPost() {
  const [doGetPost, isLoading, error] = useThunk(fetchIndividualPost);
  const navigate = useNavigate();
  const { id } = useParams();

  const { data } = useSelector((state) => {
    return state.singlePost;
  });

  useEffect(() => {
    doGetPost(id);
  }, [doGetPost]);

  const content = data.main_content;

  if (isLoading) {
    return (
      <section className='post-detail'>
        <div className='container post-deatail__container'>
          <Skeleton times={1} />
        </div>
      </section>
    );
  }

  return (
    <section className='post-detail'>
      <div className='container post-deatail__container'>
        <div className='post-detail__header'>
          <PostAuthor />
        </div>
        <h2>{data.title}</h2>
        <div className='post-detail__thumbnail'>
          <img src={data.featured_image} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </section>
  );
}

export default BlogPost;
