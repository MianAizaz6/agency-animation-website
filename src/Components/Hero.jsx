import { ReactTyped } from "react-typed";

export const Hero = () => {
    return (
        <div className="herobg">
            <div className="container">
                <div className="content">
                        <ReactTyped 
                        strings={["Plenty Options Many Lanes <br> <strong> Few Steps Only one way to </strong> <br> Your Success"]}
                        typeSpeed={50}
                        backSpeed={40} 
                         />
                </div>
            </div>
        </div>
    );
};

export default Hero;
