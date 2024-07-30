import ProjectsHero from "../Components/ProjectHero";
import { ProjectsSection } from "../Components/ProjectSection";

export const Projects = () => {
    return (
        <div>
            {/* <Hero /> */}
            <div className="services container-fluid p-0">
                {/* <Carousel /> */}
                <ProjectsHero />
                <ProjectsSection />
            </div>
        </div>
    );
};
