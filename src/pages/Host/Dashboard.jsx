import Nav from "../../components/Nav";
import { Link } from "react-router-dom";
import {AiFillStar} from "react-icons/ai";

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
                    <h5 className="detail-link">Details</h5>
                </div>

                <h1 className="income">$2,260</h1>
            </div>

            <div className="review-info">
                <h4 className="review-title">Review score</h4>
                <h5 className="review-score">
                    <AiFillStar />
                    5.0<span>/5</span>
                </h5>

                <h5 className="detail-link">Details</h5>
            </div>

        </section>
    )
}