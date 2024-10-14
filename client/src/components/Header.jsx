import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='nav'>
      <div className='container nav__container'>
        <Link to='/' className='nav__logo' onClick={closeMenu}>
          <img src={Logo} alt='Header Logo' />
        </Link>

        <ul className={isMenuOpen ? 'open nav__menu' : 'nav__menu'}>
          <li>
            <NavLink to='/' onClick={closeMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' onClick={closeMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/projects' onClick={closeMenu}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to='/blog' onClick={closeMenu}>
              Blog
            </NavLink>
          </li>
        </ul>

        <button className='nav__toggle-btn' onClick={handleClick}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}

export default Header;
