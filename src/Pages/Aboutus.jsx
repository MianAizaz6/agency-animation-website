import AboutHero from "../Components/AboutHero";
import AboutMain from "../Components/AboutMain";
import FAQ from "../Components/FAQ";
import Reviews from "../Components/Reviews";


const Aboutus = () => {
    return (
        <div>
        <div className="services container-fluid p-0">
            <AboutHero />
            <AboutMain />
            <Reviews />

            <FAQ />
        </div>
    </div>
    );
};

export default Aboutus;
