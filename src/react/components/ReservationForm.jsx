import Button from "./Button.jsx";
import Select from "./Select";
import Counter from "./PersonCounter";
import {useState} from "react";

export default function ReservationForm() {
    const now = new Date();
    const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const currentYear = now.getFullYear();

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

    function handl() {


    }

    if (monthObj.value && dayObj.value && yearObj.value) {
        const date = new Date(`${monthObj.value}/${dayObj.value}/${yearObj.value}`);
        if (date < now) {
            console.log("Date is in the past");
        }
    }

    return (
        <form action="#" id="reservationForm" className="form" name="reservationForm">
            <div className="stack">
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
                <div className="[ form__group ] [ flow ]">
                    <label htmlFor={monthObj.key}>Pick a date</label>
                    <div className="[ even-columns ] [ flow ]">
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
                <div className="[ form__group ] [ flow ] ">
                    <label htmlFor={hourObj.key}>Pick a time</label>
                    <div className="[ even-columns ] [ flow ]">
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
                        <Select name="amPm" options={["AM", "PM"]}/>
                    </div>
                </div>
                <div className="form__group">
                    <Counter start={4} min={1} max={45} content="people"/>
                </div>
                <div className="div">
                    <Button to="/reservation" content="book a table"/>
                </div>
            </div>

        </form>
    );
}