import React from "react";
import "./OutDpprCard.css"
interface ReusableCardProps {
    heading: string;
    text: string;
    buttonBgColor?: string;
    backgroundImage: string;
}

const OutDoorCard: React.FC<ReusableCardProps> = ({heading, buttonBgColor = "#EB1E25", backgroundImage, text}) => {

    return (
        <section
            className="card-section"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="card-content">
                <p className="card-heading" >{heading}</p>
                <p className="card-content-p">
                    {text}
                </p>
                <button
                    className="book-btn"
                    style={{ backgroundColor: buttonBgColor }}
                >
                    Book Now
                </button>
            </div>
        </section>
    );
};

export default OutDoorCard;
