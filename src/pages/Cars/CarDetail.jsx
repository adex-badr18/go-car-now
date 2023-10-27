import { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { getCarDetails } from "../../api";

import '../../server';

export default function CarDetail() {
    const params = useParams();
    const [car, setCar] = useState([]);
    const location = useLocation();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadCarDetails() {
            try {
                const data = await getCarDetails(params.id);
                setCar(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        loadCarDetails();
    }, [params.id]);

    const query = location.state?.query || '';

    if (error) {
        return (
            <section>
                <h1>Sorry, an error occurred: {error.message}</h1>
            </section>
        )
    }

    if (loading) {
        return (
            <section>
                <h1>Loading...</h1>
            </section>
        )
    }

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