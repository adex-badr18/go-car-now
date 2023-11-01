import logo from '/car-logo.png';
import { Link, NavLink } from 'react-router-dom';
import Nav from './Nav';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { CgMenuRight, CgClose } from 'react-icons/cg';
import { useState } from 'react';


export default function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const activeStyle = {
        fontWeight: "bold",
        color: "#161616",
        paddingBottom: "1px",
        borderBottom: "3px solid #161616"
    };
    const authenticated = localStorage.getItem('authenticated') || false;

    const hideMenu = () => setIsNavExpanded(false);
    const toggleMenu = () => setIsNavExpanded(prev => !prev);

    return (
        <header>
            <Link to='/'>
                <div className="logo-container">
                    <img src={logo} className='logo-img' alt="Sport car" />
                    <h2 className='logo-text'>Go<span>Car</span>Now</h2>
                </div>
            </Link>

            <button
                className="hamburger"
                onClick={toggleMenu}>
                {isNavExpanded ? <CgClose /> : <CgMenuRight />}
            </button>

            <Nav navType='main-nav' isNavExpanded={isNavExpanded}>
                <li><NavLink onClick={hideMenu} style={({ isActive }) => isActive && !isNavExpanded ? activeStyle : null} to='host'>Host</NavLink></li>
                <li><NavLink onClick={hideMenu} style={({ isActive }) => isActive && !isNavExpanded ? activeStyle : null} to='cars'>Cars</NavLink></li>
                <li><NavLink onClick={hideMenu} style={({ isActive }) => isActive && !isNavExpanded ? activeStyle : null} to='about'>About</NavLink></li>
                <li>
                    {
                        authenticated ?
                            <Link to='hostlogin' onClick={() => {
                                localStorage.removeItem('authenticated')
                                hideMenu()
                            }} className='profile-avatar'><BiLogOut /></Link> :
                            <Link onClick={hideMenu} to='hostlogin' className='profile-avatar'>
                                <BiLogIn />
                            </Link>
                    }
                </li>
            </Nav>
        </header>
    )
}