import logo from '/car-logo.png';
import { Link, NavLink } from 'react-router-dom';
import Nav from './Nav';
import { BsPersonCircle } from 'react-icons/bs';
import { BiLogIn } from 'react-icons/bi';
import { CgMenuRight } from 'react-icons/cg';


export default function Header() {
    const activeStyle = {
        fontWeight: "bold",
        color: "#161616",
        paddingBottom: "1px",
        borderBottom: "3px solid #161616"
    };
    const authenticated = localStorage.getItem('authenticated') || false;

    return (
        <header>
            <Link to='/'>
                <div className="logo-container">
                    <img src={logo} className='logo-img' alt="Sport car" />
                    <h2 className='logo-text'>Go<span>Car</span>Now</h2>
                </div>
            </Link>

            <button className="hamburger">
                <CgMenuRight />
            </button>

            <Nav>
                <li><NavLink style={({ isActive }) => isActive ? activeStyle : null} to='host'>Host</NavLink></li>
                <li><NavLink style={({ isActive }) => isActive ? activeStyle : null} to='cars'>Cars</NavLink></li>
                <li><NavLink style={({ isActive }) => isActive ? activeStyle : null} to='about'>About</NavLink></li>
                <li>
                    {
                        authenticated ?
                            <Link to='hostlogin' onClick={() => localStorage.removeItem('authenticated')} className='profile-avatar'><BsPersonCircle /></Link> :
                            <Link to='hostlogin' className='profile-avatar'>
                                <BiLogIn />
                            </Link>
                    }
                </li>
            </Nav>
        </header>
    )
}