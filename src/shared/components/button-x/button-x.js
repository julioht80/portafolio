import './button-x.css';

export default function ButtomX({ text, svg }) {
    return (
        <span className="j-buttom">
            <button>
                <div class="svg-wrapper-1">
                    <div class="svg-wrapper">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                        >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                                fill="currentColor"
                                d={svg}
                            ></path>
                        </svg>
                    </div>
                </div>
                <span>{text}</span>
            </button>
        </span>
    );
}
