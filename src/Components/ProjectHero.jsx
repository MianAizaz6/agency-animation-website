import { ReactTyped } from "react-typed";

export const ProjectsHero = () => {
    return (
        <div className="herobg">
            <div className="container">
                <div className="content">
                        <ReactTyped 
                        strings={["Excellence in Action<br> <strong> Real Projects, Real Results </strong>"]}
                        typeSpeed={50}
                        backSpeed={40} 
                        />
                </div>
            </div>
        </div>
    );
};

export default ProjectsHero;

