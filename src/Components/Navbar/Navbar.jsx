import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import './Navbar.css';
import Logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false); // Corrected useState usage

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu); // Toggling mobileMenu state
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={Logo} alt="" className='logo' />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        {/* Use Link from react-scroll */}
        <li><Link to='hero' smooth={true} offset={0} duration={500}> Home</Link></li>
        <li><Link to='produce' smooth={true} offset={-275} duration={500}>Our Produce </Link></li>
        <li><Link to='about-us' smooth={true} offset={-150} duration={500}>About us </Link></li>
        <li><Link to='gallery' smooth={true} offset={-170} duration={500}>Gallery </Link></li>
        <li><Link to='customer-review' smooth={true} offset={-200} duration={500}>Customer Reviews </Link></li>
        <li><Link to='contact' smooth={true} offset={-180} duration={500} className='btn'>Contact us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
