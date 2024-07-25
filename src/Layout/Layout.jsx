import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/Header";
import GetStarted from "../Components/GetStarted";

export const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <GetStarted />
            <Footer />
        </>
    );
};
