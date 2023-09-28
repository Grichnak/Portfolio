import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.jpg';
import { Link } from 'react-scroll';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <img src={logo} alt='logo' className='logo' />
            <div className='desktopMenu'>
                <Link className="desktopMenuListItem">Acceuil</Link>
                <Link className="desktopMenuListItem">A propos</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">Compétences</Link>
            </div>
            <button className='desktopMenuBtn'>
                <img src={contact} alt='contact' className='desktopMenuImg' />Contact</button>
        </nav>
    )
}

export default Navbar;