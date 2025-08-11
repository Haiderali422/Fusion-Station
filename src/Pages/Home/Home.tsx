import './Home.css'
import HeroSection from "../../Components/HeroSection/HeroSection.tsx";
import ArenaSection from "../../Components/ArenaSection/ArenaSection.tsx";
import MosaicSection from "../../Components/MosaicSection/MosaicSection.tsx";
import OnAir from "../../Components/OnAir/OnAir.tsx";
import Entertainment from "../../Components/Entertainment/Entertainment.tsx";

const Home = () => {
    return (
       <>
           <HeroSection/>
           <ArenaSection/>
           <MosaicSection/>
           <OnAir/>
           <Entertainment/>
       </>
    )
}
export default Home
