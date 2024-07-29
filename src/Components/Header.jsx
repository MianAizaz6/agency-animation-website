import { Link } from "react-router-dom";
import logo from "../assets/svgs/white_logo.png";

export const Header = () => {
    return (
        <div className="header container-fluid">
            <div className="container navbar-wrapper">
                <img className="logo" src={logo} alt="logo" />
                <div className="menu">
                    <ul className="items">
                        <li className="item">
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className="item">
                            <Link to={"/services"}>Services</Link>
                        </li>
                        <li className="item">
                            <Link>Our Projects</Link>
                        </li>
                        <li className="item">
                            <Link to={"/about-us"}>About Us</Link>
                        </li>
                    </ul>
                    <button>Contact Us</button>
                </div>
            </div>
        </div>
    );
};
