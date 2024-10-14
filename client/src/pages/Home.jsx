import Avatar from '../assets/avatar.jpg';
import Github from '../assets/github.png';
import Linedin from '../assets/linkedin.png';

function Home() {
  return (
    <div className='container home__container'>
      {' '}
      <section className='profile section'>
        <div className='section__pic-container'>
          <img src={Avatar} alt='John Doe profile picture' />
        </div>
        <div className='section__text'>
          <p className='section__text__p1'>Hello, I'm</p>
          <h1 className='title'>Some Dude</h1>
          <p className='section__text__p2'>Frontend Developer</p>
          <div className='btn-container'>
            <a className='btn btn-color-2'>Download CV</a>
            <a className='btn btn-color-1' href='./#contact'>
              Contact Info
            </a>
          </div>
          <div className='socials-container'>
            <a href='https://linkedin.com/' target='_blank'>
              <img src={Linedin} alt='My LinkedIn profile' className='icon' />
            </a>
            <a href='https://github.com/' target='_blank'>
              <img src={Github} alt='My Github profile' className='icon' />
            </a>
          </div>
        </div>
      </section>
      <section className='about section'>
        <p className='section__text__p1'>Get To Know More</p>
        <h1 className='title'>About Me</h1>
        <div className='section-container'>
          <div className='about-details-container'>
            <div className='about-containers'>
              <div className='details-container'>
                <h3>Experience</h3>
                <p>
                  2+ years <br />
                  Frontend Development
                </p>
              </div>
              <div className='details-container'>
                <h3>Education</h3>
                <p>
                  B.Sc. Bachelors Degree
                  <br />
                  M.Sc. Masters Degree
                </p>
              </div>
            </div>
            <div className='text-container'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                quis reprehenderit et laborum, rem, dolore eum quod voluptate
                exercitationem nobis, nihil esse debitis maxime facere minus
                sint delectus velit in eos quo officiis explicabo deleniti
                dignissimos. Eligendi illum libero dolorum cum laboriosam
                corrupti quclassNameem, reiciendis ea magnam? Nulla, impedit
                fuga!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='experience section'>
        <p className='section__text__p1'>Explore My</p>
        <h1 className='title'>Experience</h1>
        <div className='experience-details-container'>
          <div className='about-containers'>
            <div className='details-container'>
              <h2 className='experience-sub-title'>Frontend Development</h2>
              <div className='article-container'>
                <article className='article'>
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article className='article'>
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article className='article'>
                  <div>
                    <h3>SASS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article className='article'>
                  <div>
                    <h3>JavaScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article className='article'>
                  <div>
                    <h3>TypeScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article className='article'>
                  <div>
                    <h3>Material UI</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
            <div className='details-container'>
              <h2 className='experience-sub-title'>Frontend Development</h2>
              <div className='article-container'>
                <article className='article'>
                  <div>
                    <h3>PostgreSQL</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article className='article'>
                  <div>
                    <h3>Node JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article className='article'>
                  <div>
                    <h3>Express JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article className='article'>
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='contact section' id='contact'>
        <p className='section__text__p1'>Get in Touch</p>
        <h1 className='title'>Contact Me</h1>
        <div className='contact-info-upper-container'>
          <div className='contact-info-container'>
            <p>
              <span>Example@gmail.com</span>
            </p>
          </div>
          <div className='contact-info-container'>
            <p>
              <a href='https://www.linkedin.com'>LinkedIn</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
