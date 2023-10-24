import Nav from "../../components/Nav";
import { Link, NavLink } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

export default function HostCarDetail() {
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
                        <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='' end>Details</NavLink>
                    </li>

                    <li>
                        <NavLink style={({ isActive }) => isActive ? activeStyle : null} to=''>Pricing</NavLink>
                    </li>

                    <li>
                        <NavLink style={({ isActive }) => isActive ? activeStyle : null} to=''>Photos</NavLink>
                    </li>
                </Nav>

                <div className="host-car-detail-description">
                    <p className="">Name: <span>Mini Truck</span></p>

                    <p className="">Category: <span>Simple</span></p>

                    <p className="car-description">Description: <span>Mini trucks are popular for commercial purposes in crowded cities where larger vehicles might face challenges in maneuverability and parking. They are often used for small-scale deliveries, especially in narrow streets and congested areas. Due to their size, they are economical and practical for businesses dealing with light cargo loads.</span></p>

                    <p className="">Visibility: <span>Public</span></p>
                </div>
            </div>
        </section>
    )
}