
import { Routes, Route, Navigate } from "react-router-dom";
// import Home from "../home/Home";
import Welcome from "../welcome/welcome";
import MainLayout from "../layout/mainLayout";
import GamePlayer from "../GamePlayer/GamePlayer";
import GameResults from "../GameResults/GameResults";

const Router = () => <Routes>
    <Route path="/" element={<MainLayout />}>
        {/* { <Route index element={<Home />} /> } */}
        <Route path="welcome" element={<Welcome />} />
        <Route path="gameplayer" element={<GamePlayer />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="gameresults" element={<GameResults />} />
    </Route>
</Routes>;

export default Router;