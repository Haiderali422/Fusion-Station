import './GymSection.css'
import SectionHeader from "../SectionHeader/SectionHeader.tsx";
import comingSoon from '../../assets/Frame 1000006665.png'
import gymReactangle from '../../assets/Rectangle 206.png';
const GymSection  = () => {
    return (
       <>
           <section className="gym-section" >
               <div className="gym-header">
                   <SectionHeader first_title={"GYM &"} second_title={"E-SPORTS"} text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
                       "Lorem Ipsum "}/>
               </div>
               <div className="gym-content" >
                   <img className={"gym-layer"} src={gymReactangle} alt="Gym" />
                   <img className={"coming"} src={comingSoon} alt={"Coming soon image"} />
               </div>

            </section>
           
       </>
    )
}
export default GymSection
