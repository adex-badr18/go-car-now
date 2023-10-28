import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequiredLayout() {
    const authenticated = true;

    if (authenticated) {
        return <Outlet/>
    }

    return <Navigate to='hostlogin' state={{message: 'Please sign in first'}} />
}