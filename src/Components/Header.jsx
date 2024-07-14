import logo from '../assets/svgs/white_logo.png'

export const Header = () => {
    return (
        <div className="header container-fluid">
            <div className="container navbar-wrapper">
                <img className='logo' src={logo} alt="logo"  />
                <div className="menu">
                    <ul className="items">
                        <li className="item">Home</li>
                        <li className="item">Services</li>
                        <li className="item">Our Projects</li>
                        <li className="item">About Us</li>
                    </ul>
                    <button>Contact Us</button>
                </div>
            </div>
        </div>
    );
};
