import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HostCarDetailPrice() {
    const [car, setCar] = useState(null);
    const carId = useParams().id;

    useEffect(() => {
        fetch(`/api/host/cars/${carId}`)
            .then(res => res.json())
            .then(data => setCar(data.cars[0]));
    }, []);

    return (
        <div className="host-car-detail-price">
            <h3 className="car-detail-price">${car?.price}<span>/day</span></h3>
        </div>
    )
}