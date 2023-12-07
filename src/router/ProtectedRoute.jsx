import { useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({
    title,
    redirectRoute,
    element,
    checkAuth,
}) => {
    const [token, setToken] = useState(true)

    try {
        document.title = (title ? title + " | " : "") + "SlimMom";
    } catch (e) {}


    if (checkAuth && !token) {
        return <Navigate to={redirectRoute} replace />;
    }

    if (!checkAuth && token) {
        return <Navigate to={redirectRoute} replace />;
    }

    return <>{element}</>;
};

export default ProtectedRoute;
