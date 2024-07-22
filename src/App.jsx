import { Header } from "./Components/Header";
import { Hero } from "./Components/Hero";
import TextSection from "./Components/TextSection";
import Cards from "./Components/Cards";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
// import Video from "./Components/Video";
import Reviews from "./Components/Reviews";
import StackingCard from "./Components/StackingCard";

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
            <StackingCard />
            <Footer />
        </>
    );
}

export default App;
