import { Navigate, Outlet, useLocation } from "react-router-dom";
import storage from "../storage/storage";

const ValidateToken = () => {
    const accessToken = storage.get("access_token");
    if (!accessToken) {
        return <Navigate to="/signIn" replace/>
    }
    return <Outlet />;
};

const IsAuthenticated = () => {
    const accessToken = storage.get("access_token");
    const location = useLocation();
    if (location.pathname === '/signIn' && accessToken) {
        return <Navigate to="/" replace />;
    }
    return <Outlet />
}


export {
    ValidateToken,
    IsAuthenticated
}