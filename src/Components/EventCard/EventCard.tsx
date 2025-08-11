import React from "react";
import "./EventCard.css";

interface EventCardProps {
    image: string;
    title: string;
    location: string;
    date: string;
    isLive?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ image, title, location, date, isLive }) => {
    return (
        <div className="event-card">
            <div className="event-image-wrapper">
                <img src={image} alt={title} className="event-image" />
                <div className="image-overlay"></div>
                {isLive && <span className="live-badge">● LIVE</span>}
            </div>
            <div className="event-details">
                <h3 className="event-title">{title}</h3>
                <p className="event-meta">
                    {location} - {date}
                </p>
            </div>
        </div>
    );
};

export default EventCard;
