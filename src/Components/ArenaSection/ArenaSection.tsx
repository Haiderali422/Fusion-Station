import './ArenaSection.css'
import ArenaCard from "../ArenaCard/ArenaCard"
import ReactPlayer from 'react-player'
import { arenaData } from "../../utility/DataForComponents.ts"
import SectionHeader from "../SectionHeader/SectionHeader"
import {useEffect, useState} from "react"


const ArenaSection = () => {
    const [selectedId, setSelectedId] = useState<number>(1);
    const [video, setVideo] = useState<string>("https://www.youtube.com/shorts/bsTmZGsmz_A?feature=share");

    useEffect(() => {
        if (selectedId === 1) {
            setVideo("https://www.youtube.com/shorts/bsTmZGsmz_A?feature=share");
        } else if (selectedId === 2) {
            setVideo("https://www.youtube.com/shorts/w_H8aGpx-iQ?feature=share");
        } else {
            setVideo("https://www.youtube.com/shorts/aQgCviz5_Ko?feature=share");
        }
    }, [selectedId]);

    return (
        <section className="arena-section">
            <div className="arena-content">
                <SectionHeader
                    first_title="OUR"
                    second_title="ARENA"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
            </div>

            <div className="arena-body">
                <div className="video-container">
                    <ReactPlayer
                        src={video}
                        width="100%"
                        height="100%"
                        controls
                    />
                </div>

                <div className="cards-container">
                    {arenaData.map((item) => (
                        <ArenaCard
                            key={item.id}
                            id={item.id}
                            heading={item.title}
                            text={item.text}
                            isSelected={selectedId === item.id}
                            onClick={() => setSelectedId(item.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
export default ArenaSection;