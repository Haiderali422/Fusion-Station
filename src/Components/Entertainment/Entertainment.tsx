import EventCard from "../EventCard/EventCard.tsx";
import './Entertainment.css'
import {events} from "../../utility/DataForComponents.ts";
import image6 from '../../assets/image (6).png'
import image4 from '../../assets/image (4).png'


const Entertainment = () => {
    return (
        <>
            <section >
                <div className="events-container">
                    <EventCard image={image6} title={events.title} location={events.location} date={events.date} isLive={events.isLive} />
                    <EventCard image={image4} title={events.title} location={events.location} date={events.date} isLive={events.isLive} />
                    <EventCard image={image6} title={events.title} location={events.location} date={events.date} isLive={events.isLive}/>
                    <EventCard image={image4} title={events.title} location={events.location} date={events.date} isLive={events.isLive}/>
                </div>
            </section>

        </>
    );
};

export default Entertainment
