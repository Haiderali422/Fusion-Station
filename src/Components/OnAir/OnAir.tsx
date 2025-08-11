import './OnAir.css'
import SectionHeader from "../SectionHeader/SectionHeader.tsx";
import bgImage from "../../assets/image (5).png"
import playButton from "../../assets/Frame.png"
import upComing from "../../assets/Rectangle 205.png"

const OnAir = () => {
    return (
        <section className="on-air-section">
            <div className="on-air-container">
                <SectionHeader
                    first_title="ON-"
                    second_title="Air"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
                />
                <div className="video-container">/
                    <img className="bg-image" src={bgImage} alt="Background" />
                    <button className="play-button">
                        <img src={playButton} alt="Play" />
                    </button>
                </div>
            </div>

            <div className="upcoming-container" >
                <img className={"up-image"} src={upComing} alt="Upcoming" />
                <p className={"shows"} >upcoming shows</p>
            </div>
        </section>
    )
}
export default OnAir