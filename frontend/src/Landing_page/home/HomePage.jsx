import Awards from "./Awards";
import Education from "./Education";
import HeroSection from "./HeroSection";
import Navbar from "../Navbar";
import Pricing from "./Pricing";
import Stats from "./Stats";

function HomePage() {
    return ( 
        <>
            <Navbar/>
            <HeroSection/>
            <Awards/>
            <Education/>
            <Pricing/>
            <Stats/>
        </>
     );
}

export default HomePage;