import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequiredLayout() {
    const authenticated = localStorage.getItem('authenticated') || false;

    if (authenticated) {
        return <Outlet/>
    }

    return <Navigate to='hostlogin' state={{message: 'Please log in first'}} replace />
}