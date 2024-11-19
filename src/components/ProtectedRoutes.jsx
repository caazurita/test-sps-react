import { Navigate, Outlet, useLocation } from "react-router-dom";
import storage from "../storage/storage";

const ProtectedRoutes = ({ children }) => {
    const accessToken = storage.get("access_token");

    if (accessToken) {
        return <Outlet />;
    } else {
        return <h1>Unauthorized</h1>;
    }
};


export {
    ProtectedRoutes
}