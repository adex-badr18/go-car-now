import CarItem from "../../components/CarItem";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchHostCars } from "../../api";

export default function HostCars() {
    const [hostCars, setHostCars] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadHostCars() {
            try {
                const data = await fetchHostCars();
                setHostCars(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }

        loadHostCars();
    }, []);

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
                                    error ? `Sorry an error occurred: ${error.message}` :
                                        loading ? 'Loading...' : 'Cars not available...'
                                }
                            </h4>
                    }
                </div>
            </div>
        </section>
    )
}