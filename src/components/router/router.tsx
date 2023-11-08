import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../home/Home";
import Welcome from "../welcome/welcome";
import MainLayout from "../layout/mainLayout";
import GameResults from "../GameResults/GameResults";
import GamePlayer from "../GamePlayer/GamePlayer";
import ProtectedRoute from "./protectedRoute";


const Router = () => <Routes>
    <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="welcome" element={<ProtectedRoute><Welcome /></ProtectedRoute>} />
        <Route path="gameplayer" element={<ProtectedRoute><GamePlayer /></ProtectedRoute>} />
        <Route path="gameresults" element={<ProtectedRoute><GameResults /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" />} />
    </Route>
</Routes>;

export default Router;