import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function HostLayout() {
    return (
        <>
            <div className="dash-nav">
                <Nav>
                    <li><Link to='/host'>Dashboard</Link></li>
                    <li><Link to='income'>Income</Link></li>
                    <li><Link to='cars'>Cars</Link></li>
                    <li><Link to='reviews'>ٌReviews</Link></li>
                </Nav>
            </div>

            <Outlet />
        </>
    )
}