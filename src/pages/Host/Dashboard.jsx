import Nav from "../../components/Nav";
import { Link } from "react-router-dom";

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
                    <h5 className="bold-text">Details</h5>
                </div>

                <h1 className="income">$2,260</h1>
            </div>

        </section>
    )
}