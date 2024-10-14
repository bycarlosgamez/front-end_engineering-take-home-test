import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchPosts } from '../store';
import useThunk from '../hooks/useThunk';
import PostCard from '../components/PostCard';
import Skeleton from '../components/Skeleton';

function Blog() {
  const [doFetchPosts, isLoadingPosts, loadingPostsError] =
    useThunk(fetchPosts);
  const { data } = useSelector((state) => {
    return state.posts;
  });

  useEffect(() => {
    doFetchPosts();
  }, [doFetchPosts]);

  if (isLoadingPosts) {
    return (
      <section className='posts container'>
        <div className='posts__container'>
          <Skeleton times={6} />
        </div>
      </section>
    );
  }

  if (loadingPostsError) {
    return <div>Error fetching data</div>;
  }

  return (
    <section className='posts container'>
      <div className='posts__container'>
        {data.map((post) => (
          <PostCard
            key={post.id}
            postID={post.id}
            thumbnail={post.featured_image}
            category={post.category}
            title={post.title}
            description={post.summary}
            imgAlt={post.subtitle}
            user={post.user}
          />
        ))}
      </div>
    </section>
  );
}

export default Blog;
