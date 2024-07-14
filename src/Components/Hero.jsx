import { ReactTyped } from "react-typed";

export const Hero = () => {
    return (
        <div className="herobg">
            <div className="container">
                <div className="content">
                        <ReactTyped 
                        strings={["Plenty Options Many Lanes <br> <strong> Few Steps Only one way to </strong> <br> Your Success"]}
                        typeSpeed={150}
                        backSpeed={40} 
                        loop />
                </div>
            </div>
        </div>
    );
};
