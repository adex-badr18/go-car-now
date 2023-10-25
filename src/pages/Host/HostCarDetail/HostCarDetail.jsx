import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HostCarDetail() {
    const [car, setCar] = useState(null);
    const carId = useParams().id;

    useEffect(() => {
        fetch(`/api/host/cars/${carId}`)
            .then(res => res.json())
            .then(data => setCar(data.cars[0]));
    }, []);

    return (
        <div className="host-car-detail-description">
            <p className="">Name: <span>{car?.name}</span></p>

            <p className="">Category: <span>{car?.type}</span></p>

            <p className="car-description">Description: <span>{car?.description}</span></p>

            <p className="">Visibility: <span>Public</span></p>
        </div>
    )
}