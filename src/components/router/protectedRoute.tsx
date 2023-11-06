// import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
// import { Navigate, Route, Routes } from "react-router-dom";

// type AllowedRoutes = "/" | "/profile";

// const isAllowed = (route: string, allowedRoutes: AllowedRoutes[]): boolean => {
//     return allowedRoutes.includes(Route.);
// };

// const ProtectedRoute: React.FC<{
//     component: React.ReactElement;
//     allowedRoutes: AllowedRoutes[];
// }> = ({ component, allowedRoutes }) => {
//     const isUserLogged = GoogleOAuthProvider.useAuth().user !== null;
//     if (!isUserLogged || !isAllowed(window.location.pathname, allowedRoutes)) {
//     return <Navigate to="/" />;
// }
// return component;
// };

// export default ProtectedRoute;