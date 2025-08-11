import SectionHeader from "../SectionHeader/SectionHeader.tsx";
import MosaicCard from "../MosaicCard/MosaicCard.tsx";
import './MosaicSection.css'
import festival from '../../assets/Frame 1000006590.png'
import sheaf from '../../assets/image 157.png'
import food from '../../assets/Frame 1000006596.png'
import {mosaicData} from '../../utility/DataForComponents.ts'


const MosaicSection = () => {
    return (
       <>
           <section className="mosaic-section">
               <SectionHeader  first_title="MOSIAC" second_title="STREET"
                              text="Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry. Lorem Ipsum "
               />
             <div className="mosaicCard" >
                 <MosaicCard src={festival} heading={mosaicData.heading} text={mosaicData.text}/>
                 <MosaicCard src={sheaf} heading={mosaicData.heading} text={mosaicData.text}/>
                 <MosaicCard src={food} heading={mosaicData.heading} text={mosaicData.text}/>
             </div>
           </section>
       </>
    )
}
export default MosaicSection
