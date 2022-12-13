import {useState} from "react";

export default function Counter(props) {
    const [count, setCount] = useState(props.start);

    function handleIncrement() {
        setCount(count + 1);
    }

    function handleDecrement() {
        setCount(count - 1);
    }

    return (
        <div className="counter">
            <button className="counter__btn" onClick={handleDecrement} disabled={count === props.min}>
                <svg aria-hidden="true" focusable="false" width="7" height="3">
                    <path fill="#9E7F66" d="M6.425 2.977V.601H.629v2.376z"/>
                </svg>
                <span className="sr-only">decrease</span>
            </button>
            <p className="counter__count">{count} {props.content}</p>
            <button className="counter__btn" onClick={handleIncrement} disabled={count === props.max}>
                <svg aria-hidden="true" focusable="false" width="10" height="11">
                    <path fill="#9E7F66" d="M6.227 10.156V6.727h3.429V4.342H6.227V.913H3.842v3.429H.413v2.385h3.429v3.429z"/>
                </svg>
                <span className="sr-only">increase</span>
            </button>
        </div>
    );
}