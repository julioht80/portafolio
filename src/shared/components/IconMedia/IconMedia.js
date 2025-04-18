import './IconMedia.css';

export default function IconMedia({ tooltipText, svg, svgFillColor }) {
    return (
        <span className="j-icon-ul">
            <li className="j-icon-content">
                <a data-social="spotifxy" aria-label={tooltipText} href="https://www.spotify.com/">
                    <div className="j-filled" style={{ backgroundColor: svgFillColor }}></div>
                    <svg viewBox="0 0 100 100" version="1.1">
                        <path
                            fill="currentColor"
                            d={svg}
                        ></path>
                    </svg>
                </a>
                <div className="j-tooltip" style={{ backgroundColor: svgFillColor }}>{tooltipText}</div>
            </li>
        </span>
    );
}
