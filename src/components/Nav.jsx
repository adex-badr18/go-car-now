import logo from '/car-logo.png';

export default function Nav() {
    return (
        <nav>
            <div className="logo-container">
                <img src={logo} className='logo-img' alt="Sport car" />
                <h2 className='logo-text'>Go<span>Car</span>Now</h2>
            </div>

            <ul className="nav">
                <li>About</li>
                <li>Vans</li>
            </ul>
        </nav>
    )
}