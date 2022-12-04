import {Link} from "react-router-dom";
import Logo from "./Logo.jsx";

export default function FooterSite() {
    return (
        <footer className="[ footer-site ] [ bg-neutral-2 fg-neutral-1 ]">
            <div className="wrapper">
                <div className="switcher">
                    <div>
                        <Link to="/" aria-label="homepage"><Logo/></Link>
                    </div>
                    <div className="[ switcher ] [ fs-1 ]">
                        <div className="stack">
                            <p>Marthwaite, Sedbergh</p>
                            <p>Cumbria</p>
                            <a href="tel:+00 44 123 4567">+00 44 123 4567</a>
                        </div>
                        <div className="stack">
                            <p>open times</p>
                            <p>MON - FRI: 09:00 AM - 10:00 PM</p>
                            <p>SAT - SUN: 09:00 AM - 11:30 PM</p>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
}