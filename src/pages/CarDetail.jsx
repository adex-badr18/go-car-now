import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

import '../server';

export default function CarDetail() {
    const params = useParams();
    const [car, setCar] = useState([]);

    useEffect(() => {
        fetch(`/api/cars/${params.id}`)
            .then(res => res.json())
            .then(data => setCar(data.cars))

    }, [params.id])

    return (
        <section className="car-detail">
            <div className="back-container">
                <BiArrowBack className="back--icon" />
                <span className="back-text">Back to all cars</span>
            </div>

            <img src="" alt="" className="car-img" />

            <div className="car-type"></div>

            <h2 className="name"></h2>

            <h3 className="price">$60<span>/day</span></h3>

            <p className="car-description"></p>

            <Link to=''>Rent this van</Link>
        </section>
    )
}