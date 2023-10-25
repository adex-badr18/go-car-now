import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import CarItem from "../../components/CarItem";

export default function Dashboard() {
    const [hostCars, setHostCars] = useState(null);

    useEffect(() => {
        fetch('/api/host/cars')
            .then(res => res.json())
            .then(data => setHostCars(data.cars))
    }, []);

    const hostCarsElement = hostCars?.map(car => (
        <Link to={`/host/cars/${car.id}`} key={car.id}>
            <CarItem imgUrl={car.imageUrl} name={car.name} price={car.price} />
        </Link>
    ))

    return (
        <section className="host-dashboard">
            <div className="dash-overview">
                <h2>Welcome!</h2>

                <div className="income-control">
                    <h5>Income last <span className="bold-text">30 days</span></h5>
                    <Link to='income' className="dash-link">Details</Link>
                </div>

                <h1 className="overview-income">$2,260</h1>
            </div>

            <div className="review-info">
                <h4 className="review-title">Review score</h4>
                <h5 className="review-score">
                    <AiFillStar />
                    5.0<span>/5</span>
                </h5>

                <Link to='reviews' className="dash-link">Details</Link>
            </div>

            <div className="dash--listed-cars">
                <div className="dash--listed-cars-header">
                    <h4 className="listed-cars-title">Your listed cars</h4>

                    <Link to='/host/cars' className="dash-link">View all</Link>
                </div>

                <div className="dash--cars-list">
                    {hostCarsElement ? hostCarsElement : <p className="empty-cars">Cars not available...</p>}
                </div>
            </div>

        </section>
    )
}