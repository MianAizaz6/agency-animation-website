import { ReactTyped } from "react-typed";

export const ServicesHero = () => {
    return (
        <div className="herobg">
            <div className="container">
                <div className="content">
                        <ReactTyped 
                        strings={["Strategic Solutions to Amplify <br> <strong> Your Online Presence  </strong>"]}
                        typeSpeed={150}
                        backSpeed={40} 
                        loop />
                </div>
            </div>
        </div>
    );
};

export default ServicesHero;

