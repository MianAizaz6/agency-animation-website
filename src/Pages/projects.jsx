import ServicesHero from "../Components/ServicesHero";
import { ServicesSection } from "../Components/ServicesSection";

export const Projects = () => {
    return (
        <div>
            {/* <Hero /> */}
            <div className="services container-fluid p-0">
                {/* <Carousel /> */}
                <ServicesHero />
                <ServicesSection />
            </div>
        </div>
    );
};
