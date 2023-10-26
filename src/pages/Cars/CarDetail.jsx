import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

import '../../server';

export default function CarDetail() {
    const params = useParams();
    const [car, setCar] = useState([]);
    const location = useLocation();

    console.log(location);
    console.log(car.type);

    useEffect(() => {
        fetch(`/api/cars/${params.id}`)
            .then(res => res.json())
            .then(data => setCar(data.cars))

    }, [params.id]);

    const query = location.state?.query || '';

    return (
        <section className="car-detail">
            <Link
                to={`..?${query}`}
                relative="path"
                className='back-link'
            >
                <BiArrowBack className="back-icon" />
                <span className="back-text">Back to {query ? `"${car.type}"` : 'all'} cars</span>
            </Link>

            <img src={car.imageUrl} alt={car.name} className="car-img" />

            <div className={`car-type ${car.type}`}>{car.type}</div>

            <h2 className="car-name">{car.name}</h2>

            <h3 className="car-price">${car.price}<span>/day</span></h3>

            <p className="car-description">{car.description}</p>

            <Link to='' className='link-btn car-link'>Rent this van</Link>
        </section>
    )
}