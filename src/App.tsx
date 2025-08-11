import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import MainLayout from "./Pages/MainLayout/MainLayout.jsx";
import FusionStation from "./Pages/FusionStation/FusionStation.tsx";

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<MainLayout/>} >
                        <Route path="/" element={<Home/>} />
                        <Route path="/fusionStation" element={<FusionStation/>} />
                    </Route>
                </Routes>
            </Router>
        </>
    )
}

export default App
