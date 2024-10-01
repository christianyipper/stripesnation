const Close = ({ active }) => {
    return (
        <svg className={`icon ${ active }`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 56">
            <g id="diag_1" data-name="diag 1">
                <polygon class="icon-stroke" points="40.73 42.23 32.24 42.23 27.98 37.97 19.59 29.58 17.86 27.85 15.56 25.55 16.13 23.25 17.26 18.76 21.28 22.78 38.6 40.1 40.73 42.23"/>
                <polygon class="icon-stroke" points="24.38 13.65 23.42 14.6 24.36 13.65 24.38 13.65"/>
                <polygon class="icon-stroke" points="32.46 22.48 31.75 25.3 30.76 29.26 29.03 27.53 26.21 24.71 17.86 16.36 12.26 10.77 8.76 7.27 8.76 7.26 7.27 5.77 15.75 5.77 32.46 22.48"/>
            </g>
        </svg>
    )
}

export default Close;