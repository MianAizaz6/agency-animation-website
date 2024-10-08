import { ReactTyped } from "react-typed";

export const AboutHero = () => {
    return (
        <div className="herobg">
            <div className="container">
                <div className="content">
                        <ReactTyped 
                        strings={["Meet Your Growth Partners<br> <strong>  Our Journey, Your Success  </strong>"]}
                        typeSpeed={50}
                        backSpeed={40} 
                        />
                </div>
            </div>
        </div>
    );
};

export default AboutHero;

