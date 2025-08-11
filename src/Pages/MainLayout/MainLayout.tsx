import {Outlet} from "react-router-dom";
import Footer from "../../Components/Footer/Footer.tsx";
import Navbar from "../../Components/Header/Navbar/Navbar.tsx";
import ContactUs from "../../Components/ContactUs/ContactUs.tsx";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet/>
            <ContactUs/>
            <Footer/>
        </>
    )
}
export default MainLayout
