import PackagesHero from "../Components/PackagesHero"
import PackagesMain from "../Components/PackagesMain"

const Packages = () => {
    return (
        <div>
            {/* <Hero /> */}
            <div className="services container-fluid p-0">
                {/* <Carousel /> */}
                <PackagesHero />
                <PackagesMain />
            </div>
        </div>
    )
}

export default Packages