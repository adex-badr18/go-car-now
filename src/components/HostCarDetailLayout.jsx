import Nav from "./Nav";
import { Link, NavLink, Outlet } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export default function HostCarDetailLayout() {
    const activeStyle = {
        fontWeight: "bold",
        color: "#161616",
        paddingBottom: "1px",
        borderBottom: "3px solid #161616"
    };

    return (
        <section className="host-car-detail">
            <Link to='/host/cars' className='back-link'>
                <BiArrowBack className="back-icon" />
                <span className="back-text">Back to all cars</span>
            </Link>

            <div className="host-car-wrapper">
                <div className="car-detail-wrapper">
                    <div>
                        <img src='/mini-truck.webp' alt={'Mini Truck'} className="car-img" />
                    </div>

                    <div className="car-basic-info">
                        <div className={`car-type ${'simple'}`}>{'Simple'}</div>
                        <h3 className="car-name">Mini Truck</h3>
                        <h4 className="car-price">$60<span>/day</span></h4>
                    </div>
                </div>

                <Nav>
                    <li>
                        <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='/host/cars/1' end>Details</NavLink>
                    </li>

                    <li>
                        <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='price'>Pricing</NavLink>
                    </li>

                    <li>
                        <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='photos'>Photos</NavLink>
                    </li>
                </Nav>

                <Outlet />
            </div>

        </section>
    )
}