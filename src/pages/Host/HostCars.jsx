import CarItem from "../../components/CarItem";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HostCars() {
    const [hostCars, setHostCars] = useState(null);

    useEffect(() => {
        fetch('/api/host/cars')
            .then(res => res.json())
            .then(data => setHostCars(data.cars))
    }, []);

    const hostCarsElement = hostCars?.map(car => (
        <Link to={car.id} key={car.id}>
            <CarItem imgUrl={car.imageUrl} name={car.name} price={car.price} />
        </Link>
    ));

    return (
        <section className="host-cars">
            <div className="dash--listed-cars">
                <div className="dash--listed-cars-header">
                    <h4 className="listed-cars-title">Your listed cars</h4>
                </div>

                <div className="dash--cars-list">
                    {
                        hostCarsElement ?
                            hostCarsElement :
                            <p className="empty-cars">Cars not available...</p>
                    }
                </div>
            </div>
        </section>
    )
}