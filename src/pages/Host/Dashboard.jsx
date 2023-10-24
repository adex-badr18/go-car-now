import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Dashboard() {
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
                    <div className="dash--car-wrapper">
                        <img className="dash--car-thumb" src="/pickup-van.webp" alt="" />

                        <div className="dash--car">
                            <div className="dash--car-info">
                                <h4 className="dash--car-name">Pickup Van</h4>
                                <h5 className="dash--car-price">$100/day</h5>
                            </div>

                            <h5 className="dash-link">Edit</h5>
                        </div>
                    </div>

                    <div className="dash--car-wrapper">
                        <img className="dash--car-thumb" src="/hatchback.jpg" alt="" />

                        <div className="dash--car">
                            <div className="dash--car-info">
                                <h4 className="dash--car-name">Hatchback Golf</h4>
                                <h5 className="dash--car-price">$120/day</h5>
                            </div>

                            <h5 className="dash-link">Edit</h5>
                        </div>
                    </div>

                    <div className="dash--car-wrapper">
                        <img className="dash--car-thumb" src="/mini-truck.webp" alt="" />

                        <div className="dash--car">
                            <div className="dash--car-info">
                                <h4 className="dash--car-name">Mini Truck</h4>
                                <h5 className="dash--car-price">$80/day</h5>
                            </div>

                            <h5 className="dash-link">Edit</h5>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}