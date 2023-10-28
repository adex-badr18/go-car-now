import { Navigate, Outlet } from "react-router-dom";

export default function AuthRequiredLayout() {
    const authenticated = false;

    if (authenticated) {
        return <Outlet/>
    }

    return <Navigate to='hostlogin' state={{message: 'You must login first'}} />
}