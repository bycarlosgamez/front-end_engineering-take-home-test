import P1 from '../assets/p1.png';
import P2 from '../assets/p2.png';
import P3 from '../assets/p3.jpg';

function Projects() {
  return (
    <section className='projects'>
      <p className='section__text__p1'>Browse My Recent</p>
      <h1 className='title'>Projects</h1>
      <div className='experience-details-container'>
        <div className='about-containers'>
          <div className='details-container color-container'>
            <div className='article-container'>
              <img src={P1} alt='Project 1' className='project-img' />
            </div>
            <h2 className='experience-sub-title project-title'>Project One</h2>
            <div className='btn-container'>
              <a
                className='btn btn-color-2 project-btn'
                href='https://github.com/'
              >
                Github
              </a>
              <a
                className='btn btn-color-2 project-btn'
                href='https://github.com/'
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className='details-container color-container'>
            <div className='article-container'>
              <img src={P2} alt='Project 2' className='project-img' />
            </div>
            <h2 className='experience-sub-title project-title'>Project Two</h2>
            <div className='btn-container'>
              <a
                className='btn btn-color-2 project-btn'
                href='https://github.com/'
              >
                Github
              </a>
              <a
                className='btn btn-color-2 project-btn'
                href='https://github.com/'
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className='details-container color-container'>
            <div className='article-container'>
              <img src={P3} alt='Project 3' className='project-img' />
            </div>
            <h2 className='experience-sub-title project-title'>
              Project Three
            </h2>
            <div className='btn-container'>
              <a
                className='btn btn-color-2 project-btn'
                href='https://github.com/'
              >
                Github
              </a>
              <a
                className='btn btn-color-2 project-btn'
                href='https://github.com/'
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
