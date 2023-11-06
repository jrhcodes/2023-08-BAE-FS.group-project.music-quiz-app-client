import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const MainLayout = () => <>
    <Header />
    <main>
        <Outlet/>
    </main>
    <Footer/>
</>;

export default MainLayout;