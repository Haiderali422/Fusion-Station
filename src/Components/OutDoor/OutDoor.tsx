// import SectionHeader from "../SectionHeader/SectionHeader.tsx";
// import OutDoorCard from "./OutDoorCard/OutDoorCard.tsx";
// import './OutDoor.css'
// import cricketFacility from '../../assets/01 1.png'
// import footballFacility from '../../assets/02.png'
// import poodleFacility from '../../assets/05.png'
// import eSport from '../../assets/04.png'
//
//
// const OutDoor = () => {
//     return (
//       <>
//         <section className="OutDoor-section">
//            <div className="outdoor-heading">
//                <SectionHeader first_title={"OUTDOOR"} second_title={"SPORTS"} text={"Lorem Ipsum is simply dummy" +
//                    " text of the printing and typesetting industry. Lorem Ipsum "}/>
//            </div>
//
//             <div>
//                <div>
//                    <OutDoorCard
//                        heading={"Cricket Facilities"}
//                        text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
//                            "printer took a galley of type and scrambled it to make a type specimen book."}
//                        backgroundImage={cricketFacility}
//                    />
//                </div>
//                 <div>
//                     <OutDoorCard
//                         heading={"FootBall Facilities"}
//                         text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
//                             "printer took a galley of type and scrambled it to make a type specimen book."}
//                         backgroundImage={footballFacility}
//                         buttonBgColor={"black"}
//                     />
//                 </div>
//
//                 <div>
//                     <OutDoorCard
//                         heading={"Paddle Facilities"}
//                         text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
//                             "printer took a galley of type and scrambled it to make a type specimen book."}
//                         backgroundImage={poodleFacility}
//                     />
//                 </div>
//
//                 <div>
//                     <OutDoorCard
//                         heading={"E-sports Facilities"}
//                         text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
//                             "printer took a galley of type and scrambled it to make a type specimen book."}
//                         backgroundImage={eSport}
//                         buttonBgColor={"black"}
//                     />
//                 </div>
//
//             </div>
//
//
//         </section>
//
//       </>
//     )
// }
// export default OutDoor





// OutDoor.tsx (no changes needed to the component)
import SectionHeader from "../SectionHeader/SectionHeader.tsx";
import OutDoorCard from "./OutDoorCard/OutDoorCard.tsx";
import './OutDoor.css'
import cricketFacility from '../../assets/01 1.png'
import footballFacility from '../../assets/02.png'
import poodleFacility from '../../assets/05.png'
import eSport from '../../assets/04.png'

const OutDoor = () => {
    return (
        <section className="OutDoor-section">
            <div className="outdoor-heading">
                <SectionHeader
                    first_title={"OUTDOOR"}
                    second_title={"SPORTS"}
                    text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum "}
                />
            </div>

            <div className="outdoor-cards-container">
                <OutDoorCard
                    heading={"Cricket Facilities"}
                    text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                    backgroundImage={cricketFacility}
                />
                <OutDoorCard
                    heading={"FootBall Facilities"}
                    text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                    backgroundImage={footballFacility}
                    buttonBgColor={"black"}
                />
                <OutDoorCard
                    heading={"Paddle Facilities"}
                    text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                    backgroundImage={poodleFacility}
                />
                <OutDoorCard
                    heading={"E-sports Facilities"}
                    text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                    backgroundImage={eSport}
                    buttonBgColor={"black"}
                />
            </div>
        </section>
    )
}
export default OutDoor