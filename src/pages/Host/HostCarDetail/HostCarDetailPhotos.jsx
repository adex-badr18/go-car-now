import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function HostCarDetailPhotos() {
    const [car, setCar] = useState(null);
    const carId = useParams().id;

    useEffect(() => {
        fetch(`/api/host/cars/${carId}`)
            .then(res => res.json())
            .then(data => setCar(data.cars[0]));
    }, []);

    return (
        <div className="host-car-detail-photos">
            <img src={car?.imageUrl} alt={car?.name} />
        </div>
    )
}