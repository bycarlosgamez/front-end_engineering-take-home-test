import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Projects from './pages/Projects';
import './styles/index.scss';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<BlogPost />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
