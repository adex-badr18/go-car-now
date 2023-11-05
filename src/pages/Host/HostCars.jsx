import CarItem from "../../components/CarItem";
import { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { fetchHostCars } from "../../api";

export async function loader() {
    const data = await fetchHostCars();
    return data;
}

export default function HostCars() {
    const hostCars = useLoaderData();
    const [error, setError] = useState(null);

    const hostCarsElement = hostCars?.map(car => (
        <Link to={car.id} key={car.id}>
            <CarItem imgUrl={car.imageUrl.startsWith('.') ? `.${car.imageUrl}` : car.imageUrl} name={car.name} price={car.price} />
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
                            <h4 className="empty-cars">
                                {
                                    error && `Sorry an error occurred: ${error.message}`
                                }
                            </h4>
                    }
                </div>
            </div>
        </section>
    )
}