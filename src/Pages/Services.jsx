import Carousel from "../Components/Carousel";
import { ServicesSection } from "../Components/ServicesSection";

export const Services = () => {
    return (
        <div>
            {/* <Hero /> */}
            <div className="services container-fluid p-0">
                <Carousel />
                <ServicesSection />
            </div>
        </div>
    );
};
