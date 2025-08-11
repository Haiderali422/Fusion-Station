import football from '../../assets/Untitled-1 1@3x.png'
import cricket from '../../assets/cricket-166931_1920 1.png'
import './HeroSection.css'
import Button from "../Button/Button.tsx";
const HeroSection = () => {
    return (
       <>
           <section className="hero-section">
               <img className="cricket" src={cricket} alt="cricket player" />
               <img className="football" src={football} alt="football player" />
               <div className="content-container">
                   <p>
                       <span className="usp">USP OF</span><br/>
                       <span className="fusion">USP OF FUSION STATION</span>
                   </p>
                   <Button className="book-now" text="Book Now"/>
               </div>

           </section>

       </>
    )
}
export default HeroSection
