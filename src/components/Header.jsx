import logo from '/car-logo.png';
import { Link, NavLink } from 'react-router-dom';
import Nav from './Nav';

export default function Header() {
    const activeStyle = {
        fontWeight: "bold",
        color: "#161616",
        paddingBottom: "1px",
        borderBottom: "3px solid #161616"
    }

    return (
        <header>
            <Link to='/'>
                <div className="logo-container">
                    <img src={logo} className='logo-img' alt="Sport car" />
                    <h2 className='logo-text'>Go<span>Car</span>Now</h2>
                </div>
            </Link>

            <Nav>
                <li><NavLink style={({isActive}) => isActive ? activeStyle : null} to='host'>Host</NavLink></li>
                <li><NavLink style={({isActive}) => isActive ? activeStyle : null} to='cars'>Cars</NavLink></li>
                <li><NavLink style={({isActive}) => isActive ? activeStyle : null} to='about'>About</NavLink></li>
            </Nav>
        </header>
    )
}