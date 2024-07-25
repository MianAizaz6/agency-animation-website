import { Hero } from "../Components/Hero";
import TextSection from "../Components/TextSection";
import Cards from "../Components/Cards";
import FAQ from "../Components/FAQ";
// import Video from "./Components/Video";
import Reviews from "../Components/Reviews";
import StackingCard from "../Components/StackingCard";

function App() {
    return (
        <>
            <Hero />
            <TextSection />
            <Cards />
            {/* <Video /> */}
            <Reviews />
            <StackingCard />
            <FAQ />
        </>
    );
}

export default App;
