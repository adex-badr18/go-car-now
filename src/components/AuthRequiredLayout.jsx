import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthRequiredLayout() {
    const location = useLocation();
    const authenticated = localStorage.getItem('authenticated') || false;

    if (authenticated) {
        return <Outlet/>
    }

    return <Navigate to='hostlogin' state={{message: 'Please log in first', from: location.pathname}} replace />
}