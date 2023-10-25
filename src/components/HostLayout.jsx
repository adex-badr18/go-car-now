import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { NavLink } from "react-router-dom";

export default function HostLayout() {
    const activeStyle = {
        fontWeight: "bold",
        color: "#161616",
        paddingBottom: "1px",
        borderBottom: "3px solid #161616"
    };

    return (
        <>
            <div className="dash-nav">
                <Nav>
                    <li>
                        <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='.' end>Dashboard</NavLink>
                    </li>

                    <li>
                        <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='income'>Income</NavLink>
                    </li>

                    <li>
                        <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='cars'>Cars</NavLink>
                    </li>

                    <li>
                        <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='reviews'>ٌReviews</NavLink>
                    </li>
                </Nav>
            </div>

            <Outlet />
        </>
    )
}