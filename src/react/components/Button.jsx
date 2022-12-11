import {Link} from "react-router-dom";

export default function Button(props) {

    function getTag() {
        if (props.href) {
            return 'a';
        } else if (props.to) {
            return Link;
        } else {
            return 'button';
        }
    }
    const Tag = getTag();

    function getType() {
        if (!props.type) return;

        return {'data-type': props.type};
    }

    function handleClick() {
        if (!props.onClick) return

        props.onClick();
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            handleClick();
        }
    }

    return (
        <Tag href={props.href}
             to={props.to}
             className={`btn`}
             onClick={handleClick}
             onKeyDown={e => handleKeyDown(e)}
             {...getType()}
             {...props.attributes}
        >
            {props.content}
        </Tag>
    );
}