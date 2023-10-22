import logo from '/car-logo.png';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <header>
            <Link to='/'>
                <div className="logo-container">
                    <img src={logo} className='logo-img' alt="Sport car" />
                    <h2 className='logo-text'>Go<span>Car</span>Now</h2>
                </div>
            </Link>
            
            <nav>
                <ul className="nav">
                    <li><Link to='about'>About</Link></li>
                    <li><Link to='cars'>Cars</Link></li>
                </ul>
            </nav>
        </header>
    )
}