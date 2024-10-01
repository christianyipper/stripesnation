const Burger = ({ active }) => {
    return (
        <svg className={`icon ${ active }`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 56">
            <polygon class="icon-stroke" points="44.19 21 42.69 27 3.81 27 5.31 21 44.19 21"/>
            <polygon class="icon-stroke" points="40.38 36.23 38.88 42.23 0 42.23 1.5 36.23 40.38 36.23"/>
            <polygon class="icon-stroke" points="48 5.77 46.5 11.77 7.62 11.77 9.12 5.77 48 5.77"/>
        </svg>
    )
}

export default Burger;