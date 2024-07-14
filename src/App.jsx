import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import TextSection from "./Components/TextSection";
import Cards from "./Components/Cards";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
// import Video from "./Components/Video";
import Reviews from "./Components/Reviews";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <TextSection />
            <Cards />
            {/* <Video /> */}
            <Reviews />
            <FAQ />
            <Footer />
        </>
    );
}

export default App;
