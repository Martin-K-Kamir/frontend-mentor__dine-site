import Hero from "../components/Hero.jsx";
import ReservationForm from "../components/ReservationForm";

export default function ReservationPage() {
    return (
        <main>
            <Hero title="Reservations"
                  desc="We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you."
                  image={{name: "hero-bg", dir: "reservationpage"}}
            >
                <ReservationForm/>
            </Hero>
            <span className="pattern-curve" style={{"--_bottom" : "0%", "--_radius-3": "var(--_radius)", "--_length" : '70%'}} aria-hidden="true"></span>
            {/*<div className="boxes wrapper">*/}
            {/*    <div className="box space-1"></div>*/}
            {/*    <div className="box space-2"></div>*/}
            {/*    <div className="box space-3"></div>*/}
            {/*    <div className="box space-4"></div>*/}
            {/*    <div className="box space-5"></div>*/}
            {/*    <div className="box space-6"></div>*/}
            {/*    <div className="box space-7"></div>*/}
            {/*    <div className="box space-8"></div>*/}
            {/*    <div className="box space-9"></div>*/}
            {/*    <div className="box space-10"></div>*/}
            {/*</div>*/}
            {/*<div className="boxes wrapper">*/}
            {/*    <div className="box2 space-fluid-1"></div>*/}
            {/*    <div className="box2 space-fluid-2"></div>*/}
            {/*    <div className="box2 space-fluid-3"></div>*/}
            {/*    <div className="box2 space-fluid-4"></div>*/}
            {/*    <div className="box2 space-fluid-5"></div>*/}
            {/*    <div className="box2 space-fluid-6"></div>*/}
            {/*    <div className="box2 space-fluid-7"></div>*/}
            {/*    <div className="box2 space-fluid-8"></div>*/}
            {/*</div>*/}
        </main>
    );
}
