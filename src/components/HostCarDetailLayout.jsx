import Nav from "./Nav";
import { Link, NavLink, Outlet } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchHostCarDetail } from "../api";

export default function HostCarDetailLayout() {
    const [car, setCar] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const carId = useParams().id;

    useEffect(() => {
        async function loadCarDetails() {
            try {
                const data = await fetchHostCarDetail(carId);
                setCar(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        loadCarDetails();
    }, []);

    const activeStyle = {
        fontWeight: "bold",
        color: "#161616",
        paddingBottom: "1px",
        borderBottom: "3px solid #161616"
    };

    return (
        <section className="host-car-detail">
            <Link to='..' relative="path" className='back-link'>
                <BiArrowBack className="back-icon" />
                <span className="back-text">Back to all cars</span>
            </Link>

            {
                error ? <h4 className="feedback">Sorry, an error occurred: {error.message}</h4> :
                    loading ? <h4 className="feedback">Loading...</h4> :
                        <div className="host-car-wrapper">
                            <div className="car-detail-wrapper">
                                <div>
                                    <img src={car?.imageUrl} alt={car?.name} className="car-img" />
                                </div>

                                <div className="car-basic-info">
                                    <div className={`car-type ${car?.type}`}>{car?.type}</div>
                                    <h3 className="car-name">{car?.name}</h3>
                                    <h4 className="car-price">${car?.price}<span>/day</span></h4>
                                </div>
                            </div>

                            <Nav>
                                <li>
                                    <NavLink style={({ isActive }) => isActive ? activeStyle : null} to={`.`} end>Details</NavLink>
                                </li>

                                <li>
                                    <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='price'>Pricing</NavLink>
                                </li>

                                <li>
                                    <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='photos'>Photos</NavLink>
                                </li>
                            </Nav>

                            <Outlet context={[car]} />
                        </div>
            }

        </section>
    )
}