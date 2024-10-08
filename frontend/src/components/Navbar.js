import React, {useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import { ButtonL, ButtonS } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(()=> {
    showButton();
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <img src='../images/logo.png' alt='Logo'></img>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/aboutus' className='nav-links' onClick={closeMobileMenu}>
                        About us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/signup' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Sign Up
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Login
                    </Link>
                </li>
            </ul>
            {button && <ButtonS buttonStyle='btn--outline'>SIGN UP</ButtonS>}
            {button && <ButtonL buttonStyle='btn--outline'>LOGIN</ButtonL>} 
        </div>
    </nav>
    </>
  )
}

export default Navbar
