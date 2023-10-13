import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' className='logo' />
            <div className='desktopMenu'>
                <Link activeClass='active' to='landing' spy={true} smooth={true} offset={-90} duration={500} className="desktopMenuListItem">Acceuil</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-85} duration={500} className="desktopMenuListItem">A propos</Link>
                <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-120} duration={500} className="desktopMenuListItem">Mon parcours</Link>
                <Link activeClass='active' to='contact-page' spy={true} smooth={true} offset={-120} duration={500} className="desktopMenuListItem">Contact</Link>
            </div>

        </nav >
    )
}

export default Navbar;