import React, {useState} from "react";

export default function Select(props) {
    const [dropdownActive, setDropdownActive] = useState(false);
    const [selected, setSelected] = useState(props.options[0]);

    function handleDropdownClick(e) {
       if (e.target.className === "select__selected") {
           setDropdownActive(!dropdownActive);
       }
    }

    function handleOptionClick(option) {
        setSelected(option);
        props.selectedOption(option);
    }

    document.addEventListener("click", function (e) {
        if (e.target.className !== "select__selected" && e.target.className !== "select__option") {
            setDropdownActive(false);
        }
    });

    return (
        <div className="select" onClick={e => handleDropdownClick(e)}>
            <select className="sr-only" name={props.name}>
                {props.options.map((option, index) => <option key={`key${index}`} value={option} aria-selected={selected === option}>{option}</option>)}
            </select>
            <div aria-hidden={true}>
                <div className="select__selected" data-open={dropdownActive}>
                    {selected}
                </div>
                <div className="select__dropdown" data-open={dropdownActive} aria-hidden={true}>
                    {props.options.map((option, index) => (
                        <div key={`key${index}`}
                             className="select__option"
                             data-value={option}
                             data-selected={selected === option}
                             onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}