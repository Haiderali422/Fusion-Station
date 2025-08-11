import Fusion from "../../Components/Fusion/Fusion.tsx";
import OutDoor from "../../Components/OutDoor/OutDoor.tsx";
import GymSection from "../../Components/GymSection/GymSection.tsx";
import {useEffect} from "react";


const FusionStation = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    return (
       <>
            <section className="section">
                <Fusion/>
                <OutDoor/>
                <GymSection/>
            </section>
       </>
    )
}
export default FusionStation
