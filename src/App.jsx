import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import ScrollToTop from "./react/utilities/ScrollToTop";
import FooterSite from "./react/components/FooterSite";
import HomePage from "./react/pages/HomePage.jsx";
import ReservationPage from "./react/pages/ReservationPage.jsx";


export default function App() {

    return (<div className="App">
        <Router>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/reservation" element={<ReservationPage/>}/>
                </Routes>
                <FooterSite/>
            </ScrollToTop>
        </Router>
    </div>);
}
