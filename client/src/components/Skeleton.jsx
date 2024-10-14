function Skeleton({ times }) {
  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className='skeleton__card'>
          <div className='skeleton__card-img skeleton'></div>
          <div className='skeleton__card-body'>
            <h2 className='skeleton__card-title skeleton'></h2>
            <p className='skeleton__card-intro skeleton'></p>
          </div>
        </div>
      );
    });

  return boxes;
}

export default Skeleton;
