import { ReactTyped } from "react-typed";

export const ServicesHero = () => {
    return (
        <div className="herobg">
            <div className="container">
                <div className="content">
                        <ReactTyped 
                        strings={["Innovative Projects that Drive Results"]}
                        typeSpeed={150}
                        backSpeed={40} 
                        loop />
                </div>
            </div>
        </div>
    );
};

export default ServicesHero;

