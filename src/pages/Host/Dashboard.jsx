import Nav from "../../components/Nav";
import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <section className="host-dashboard">
            <div className="host-nav">
                <Nav>
                    <li><Link to='/host'>Dashboard</Link></li>
                    <li><Link to='/host/income'>Income</Link></li>
                    <li><Link to='/host/cars'>Cars</Link></li>
                    <li><Link to='/host/reviews'>ٌReviews</Link></li>
                </Nav>
            </div>

        </section>
    )
}