import Button from "./Button.jsx";
import Select from "./Select";
import Counter from "./PersonCounter";
import {useEffect, useState} from "react";

export default function ReservationForm() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const timeFormats = ["AM", "PM"];
    const [timeFormat, setTimeFormat] = useState(timeFormats[0]);
    const [error, setError] = useState("");
    const [dateValid, setDateValid] = useState(false);
    const [timeValid, setTimeValid] = useState(false);

    const nameObj = {
        key: "Name",
        minLength: 4,
        maxLength: 30,
        pattern: "^[\\w'\\-,.][^0-9_!¡?÷?¿/\\\\+=@#$%ˆ&*(){}|~<>;:[\\]]{2,}$",
    }

    const emailObj = {
        key: "Email",
        minLength: 4,
        maxLength: 40,
        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
    }

    const [monthObj, setMonthObj] = useState({
        key: "Month",
        placeholder: "MM",
        value: "",
        minValue: 1,
        maxValue: 12,
    });

    const [dayObj, setDayObj] = useState({
        key: "Day",
        placeholder: "DD",
        value: "",
        minValue: 1,
        maxValue: lastDayOfMonth,
    });

    const [yearObj, setYearObj] = useState({
        key: "Year",
        placeholder: "YYYY",
        value: "",
        minValue: currentYear,
        maxValue: currentYear + 2,
    });

    const [hourObj, setHourObj] = useState({
        key: "Hour",
        placeholder: "09",
        value: "",
        minValue: 0,
        maxValue: 12,
    });

    const [minsObj, setMinsObj] = useState({
        key: "Mins",
        placeholder: "00",
        value: "",
        minValue: 0,
        maxValue: 60,
    });

    function validateDate() {
        if (!(monthObj.value && dayObj.value && yearObj.value && hourObj.value && minsObj.value)) return;
        const limit = 3600000 * 4;
        const currentTimestamp = Date.now();
        const setTimestamp = new Date(yearObj.value, monthObj.value - 1, dayObj.value, timeFormat === "AM" ? hourObj.value : Number(hourObj.value) + 12, minsObj.value).valueOf();
        if (setTimestamp < currentTimestamp) {
            setError('Selected date is in the past');
            setDateValid(false);
        } else if (setTimestamp < currentTimestamp + limit) {
            setError('Reservation must be at least 4 hours in advance');
            setDateValid(false);
        } else {
            setDateValid(true);
        }
    }

    function isWeekend(date = new Date()) {
        return date.getDay() === 6 || date.getDay() === 0;
    }

    function formatMins(mins) {
        return mins < 10 ? `0${mins}` : mins;
    }

    function checkOpenTime(openHour, openMins, closeHour, closeMins) {
        const unformattedHour = timeFormat === "AM" ? hourObj.value : Number(hourObj.value) + 12;
        if (unformattedHour < openHour || (unformattedHour === openHour && minsObj.value < openMins)) {
            setError(`Restaurant opens at ${openHour}:${formatMins(openMins)} AM`);
            setTimeValid(false);
        } else if (unformattedHour === closeHour -1 && minsObj.value > closeMins) {
            setError(`Last reservation is at ${closeHour - 12 - 1}:${formatMins(openMins)} PM`);
            setTimeValid(false);
        } else if (unformattedHour >= closeHour || (unformattedHour === closeHour && minsObj.value > closeMins)) {
            setError(`Restaurant closes at ${closeHour - 12}:${formatMins(openMins)} PM`);
            setTimeValid(false);
        } else {
            setTimeValid(true);
        }
    }

    function validateOpenTime() {
        if (!(hourObj.value && minsObj.value)) return;
        const openHour = 9;
        const openMins = 0;
        const closeHour = 22;
        const closeMins = 0;
        const closeHourWeekend = 23;
        const closeMinsWeekend = 30;

        if (isWeekend(now)) {
            checkOpenTime(openHour, openMins, closeHourWeekend, closeMinsWeekend);
        } else {
            checkOpenTime(openHour, openMins, closeHour, closeMins);
        }
    }

    useEffect(() => {
        validateDate();
        if (dateValid) validateOpenTime();
        if (dateValid && timeValid) setError("");
    });

    function handleSubmit() {
        if (!dateValid || !timeValid) return;
        alert(`We have received your reservation for ${monthObj.value}/${dayObj.value}/${yearObj.value} at ${hourObj.value}:${formatMins(minsObj.value)} ${timeFormat}`);
    }

    return (
        <form action="#" id="reservationForm" className="form" name="reservationForm" data-type="box">
            <div className="[ form__container ] [ stack ] [ space-5 ]">
                <div className="form__group">
                    <label htmlFor={nameObj.key} data-type="popsout">{nameObj.key}</label>
                    <input type="text"
                           id={nameObj.key}
                           name={nameObj.key}
                           placeholder={nameObj.key}
                           pattern={nameObj.pattern}
                           minLength={nameObj.minLength}
                           maxLength={nameObj.maxLength}
                           title="Enter valid full name"
                           required={true}
                           autoComplete="off"
                           autoCapitalize="none"
                           autoCorrect="off"
                    />
                </div>
                <div className="form__group">
                    <label htmlFor={emailObj.key} data-type="popsout">{emailObj.key}</label>
                    <input type={emailObj.key}
                           id={emailObj.key}
                           name={emailObj.key}
                           placeholder={emailObj.key}
                           pattern={emailObj.pattern}
                           minLength={emailObj.minLength}
                           maxLength={emailObj.maxLength}
                           title="Enter valid email address"
                           required={true}
                           autoComplete="off"
                           autoCapitalize="none"
                           autoCorrect="off"
                    />
                </div>
                <div className="form__group">
                    <label htmlFor={monthObj.key}>Pick a date</label>
                    <div className="[ even-columns ] [ flow ] [ space-3 ]">
                        <input type="number"
                               id={monthObj.key}
                               name={monthObj.key}
                               placeholder={monthObj.placeholder}
                               min={monthObj.minValue}
                               max={monthObj.maxValue}
                               onChange={e => setMonthObj({...monthObj, value: e.target.value})}
                               value={monthObj.value}
                               title="Enter valid month's number"
                               required={true}
                        />
                        <input type="number"
                               id={dayObj.key}
                               name={dayObj.key}
                               placeholder={dayObj.placeholder}
                               min={dayObj.minValue}
                               max={dayObj.maxValue}
                               onChange={e => setDayObj({...dayObj, value: e.target.value})}
                               value={dayObj.value}
                               title="Enter valid day's number"
                               required={true}
                        />
                        <input type="number"
                               id={yearObj.key}
                               name={yearObj.key}
                               placeholder={yearObj.placeholder}
                               min={yearObj.minValue}
                               max={yearObj.maxValue}
                               onChange={e => setYearObj({...yearObj, value: e.target.value})}
                               value={yearObj.value}
                               title="Enter valid year"
                               required={true}/>
                    </div>
                </div>
                <div className="form__group">
                    <label htmlFor={hourObj.key}>Pick a time</label>
                    <div className="[ even-columns ] [ flow ] [ space-3 ]">
                        <input type="number"
                               id={hourObj.key}
                               name={hourObj.key}
                               placeholder={hourObj.placeholder}
                               min={hourObj.minValue}
                               max={hourObj.maxValue}
                               onChange={e => setHourObj({...hourObj, value: e.target.value})}
                               value={hourObj.value}
                               title="Enter valid hour"
                               required={true}
                        />
                        <input type="number"
                               id={minsObj.key}
                               name={minsObj.key}
                               placeholder={minsObj.placeholder}
                               min={minsObj.minValue}
                               max={minsObj.maxValue}
                               onChange={e => setMinsObj({...minsObj, value: e.target.value})}
                               value={minsObj.value}
                               title="Enter valid minutes"
                               required={true}
                        />
                        <Select name="amPm" selectedOption={setTimeFormat} options={timeFormats}/>
                    </div>
                </div>
                <div className="form__group">
                    <Counter start={4} min={1} max={45} content="people"/>
                </div>
                <Button onClick={handleSubmit} content="book a table"/>
                {error && <p className="[ form__info ] [ text-center fw-3 ]" data-error={!(error === "true")}>{error}</p>}
            </div>
        </form>
    );
}