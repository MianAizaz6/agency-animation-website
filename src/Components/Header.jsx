import { Link } from "react-router-dom";
import logo from "../assets/svgs/go_logo.png";

export const Header = () => {
    return (
        <div className="header container-fluid">
            <div className="container navbar-wrapper">
                <div className="flex items-center gap-2">  <img className="logo" src={logo} alt="logo" /> <h1>GO ADVERTISING</h1> </div>
                <div className="menu">
                    <ul className="items">
                        <li className="item">
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className="item">
                            <Link to={"/services"}>Services</Link>
                        </li>
                        <li className="item">
                            <Link to={"/projects"}>Our Projects</Link>
                        </li>
                        <li className="item">
                            <Link to={"/about-us"}>About Us</Link>
                        </li>
                    </ul>
                    <button>Contact us</button>
                </div>
            </div>
        </div>
    );
};
