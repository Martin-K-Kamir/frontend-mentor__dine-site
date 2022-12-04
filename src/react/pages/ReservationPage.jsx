import Hero from "../components/Hero.jsx";
import ReservationForm from "../components/ReservationForm";

export default function ReservationPage() {
    return (
        <main>
            <Hero title="Reservations"
                  desc="We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you."
                  image={{name: "hero-bg", dir: "reservationpage"}}
            />
            <ReservationForm/>
        </main>
    );
}
