import React from "react";
import "./Fusion.css";
import fusionImage from "../../assets/09 1.png";

const Fusion: React.FC = () => {
    return (
        <section className="fusion-station">
            <div className="content-box">
                <h1>
                    <span className="fusion-main">FUSION</span>
                    <span className="fusion-sub">STATION</span>
                </h1>
                <p className="description">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum
                </p>
                <button className="book-now-btn">Book Now</button>
            </div>
            <div className="image-container">
                <img src={fusionImage} alt="Fusion Station" />
            </div>
        </section>
    );
};

export default Fusion;