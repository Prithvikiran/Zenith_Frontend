import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

const PublicRoute = () => {
    const [authToken, setAuthToken] = useState(undefined);

    useEffect(() => {
        const token = localStorage.getItem("authToken"); 
        setAuthToken(token);
    }, []);

    if (authToken === undefined) {
        return null;
    }

    if (authToken && authToken !== "null" && authToken !== "" && authToken !== "undefined") {
        return <Navigate to="/post" replace />;
    }

    return <Outlet />;
};

export default PublicRoute;
