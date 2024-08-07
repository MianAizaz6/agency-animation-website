import { ReactTyped } from "react-typed";

export const PackagesHero = () => {
    return (
        <div className="herobg">
            <div className="container">
                <div className="content">
                        <ReactTyped 
                        strings={["Last Chance for Big Savings<br> <strong>  Choose Your Plan Now!  </strong>"]}
                        typeSpeed={50}
                        backSpeed={40} 
                        />
                </div>
            </div>
        </div>
    );
};

export default PackagesHero;

