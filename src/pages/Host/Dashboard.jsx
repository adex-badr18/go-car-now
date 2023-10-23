import Nav from "../../components/Nav";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

export default function Dashboard() {
    return (
        <section className="host-dashboard">
            <div className="dash-nav">
                <Nav>
                    <li><Link to='/host'>Dashboard</Link></li>
                    <li><Link to='/host/income'>Income</Link></li>
                    <li><Link to='/host/cars'>Cars</Link></li>
                    <li><Link to='/host/reviews'>ٌReviews</Link></li>
                </Nav>
            </div>

            <div className="dash-overview">
                <h2>Welcome!</h2>

                <div className="income-control">
                    <h5>Income last <span className="bold-text">30 days</span></h5>
                    <h5 className="dash-link">Details</h5>
                </div>

                <h1 className="overview-income">$2,260</h1>
            </div>

            <div className="review-info">
                <h4 className="review-title">Review score</h4>
                <h5 className="review-score">
                    <AiFillStar />
                    5.0<span>/5</span>
                </h5>

                <h5 className="dash-link">Details</h5>
            </div>

            <div className="dash--listed-cars">
                <div className="dash--listed-cars-header">
                    <h4 className="listed-cars-title">Your listed cars</h4>

                    <h5 className="dash-link">View all</h5>
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