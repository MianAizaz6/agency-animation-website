import { createBrowserRouter } from "react-router-dom";
import App from "../Pages/App";
import { Layout } from "../Layout/Layout";
import { Services } from "../Pages/Services";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Aboutus from "../Pages/Aboutus";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/about-us",
                element: <Aboutus />,
            },
        ],
    },
]);

export default routes;
