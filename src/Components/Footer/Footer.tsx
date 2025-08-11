import './Footer.css';
import logo from '../../assets/Fusion Station (1).png'
import LinkedIn from "../../assets/Linkedin.png";
import FaceBook from "../../assets/facebook (1).png";
import Twitter from "../../assets/Twitter.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-top">
                            <div className="footer-logo-section">
                                <img className="footer-logo" src={logo} alt="Fusion Station" />
                                <p className="footer-description">
                                    Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.
                                </p>
                            </div>

                            <div className="footer-section quick-links">
                                <h3 className="footer-heading">Quick Links</h3>
                                <div className="footer-links-container">
                                    <div className="footer-links-column">
                                        <div className="footer-link active">
                                            <span>Home</span>
                                            <div className="footer-link-underline"></div>
                                        </div>
                                        <a href="/fusionStation" className="footer-link  footer-link active">Fusion Station</a>
                                        <a href="#" className="footer-link">Coaching</a>
                                        <a href="#" className="footer-link">About Us</a>
                                    </div>

                                    <div className="footer-links-column">
                                        <a href="#" className="footer-link">Digital Recaps</a>
                                        <a href="#" className="footer-link">On-Air</a>
                                        <a href="#" className="footer-link">Mosaic Street</a>
                                        <a href="#" className="footer-link">Contact Us</a>
                                    </div>
                                </div>
                            </div>

                            <div className="footer-section investors">
                                <h3 className="footer-heading">Investors</h3>
                                <div className="footer-links">
                                    <a href="#" className="footer-link">Investor relations</a>
                                    <a href="#" className="footer-link">Financial reports</a>
                                    <a href="#" className="footer-link">Shareholder info</a>
                                </div>
                            </div>

                            <div className="footer-section corporate-communication">
                                <h3 className="footer-heading">Corporate Communication</h3>
                                <div className="footer-links">
                                    <a href="#" className="footer-link">Press releases</a>
                                    <a href="#" className="footer-link">Corporate announcements</a>
                                </div>
                            </div>
                        </div>

                        <div className="footer-bottom">

                            <div className="footer-divider"></div>

                            <div className="footer-bottom-content">

                                <div className="footer-social-icons">
                                    <img src={LinkedIn} alt="LinkedIn" />
                                    <img src={FaceBook} alt="Facebook" />
                                    <img src={Twitter} alt="Twitter" />
                                </div>

                                <p className="footer-copyright">
                                    © 2020 Lift Media. Legal notices, terms & conditions
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;