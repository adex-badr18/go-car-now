import logo from '/car-logo.png';

export default function Nav() {
    return (
        <nav>
            <img src={logo} alt="Sport car" />

            <ul className="nav">
                <li>About</li>
                <li>Vans</li>
            </ul>
        </nav>
    )
}