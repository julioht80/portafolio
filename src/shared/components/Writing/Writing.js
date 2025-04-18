import './Writing.css';

export default function Writing({ text = '', time = 10, space = 20 }) {
    const animation = {
        width: `${space}ch`,
        WebkitAnimation: `typing ${time}s steps(${text.length}, end), blink-caret .5s step-end infinite alternate`,
        animation: `typing ${time}s steps(${text.length}, end), blink-caret .5s step-end infinite alternate`,
    }

    return (
        <div 
            className="j-writing-animation"
            style={animation}
        >{text}</div>
    );
}
