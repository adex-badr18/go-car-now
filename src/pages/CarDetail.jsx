import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
            <h1>Car detail goes here.</h1>
        </section>
    )
}