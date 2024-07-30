import { ProjectsSection } from "../Components/ProjectSection";
import ServicesHero from "../Components/ServicesHero";

export const Projects = () => {
    return (
        <div>
            {/* <Hero /> */}
            <div className="services container-fluid p-0">
                {/* <Carousel /> */}
                <ServicesHero />
                <ProjectsSection />
            </div>
        </div>
    );
};
