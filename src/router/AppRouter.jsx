import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AppRoutes, { AppRoutesContainer } from "./AppRoutes";

const routesModified= AppRoutes.map(
    route => {
        const el = route?.element && route?.element();
        return {
            ...route,
            element: () => (
                <ProtectedRoute
                    checkAuth={route.checkAuth ?? true}
                    element={el}
                    title={route.title}
                    redirectRoute={route.redirectRoute || "/"}
                />
            ),
        };
    }
);

const routesComponet = (
    <Routes>
        {routesModified.map((route) => {
            const el = route?.element && route?.element();
            return (
                <Route key={`route__${route.path}`} path={route.path} element={el} />
            );
        })}
    </Routes>
);

const AppRouter = () => {
    return <AppRoutesContainer>{routesComponet}</AppRoutesContainer>;
};
export default AppRouter;
