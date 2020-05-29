import React from 'react'
import coffee from '../images/animat-coffee.gif'


function Header() {
    return(
        <header id="header" className="alt">
            <img src={coffee} className='myLogo' height='210' width='210' alt="" />
            <h1>Kevin Wang</h1>
            <p>Front End Developer</p>
        </header>
    )
}

export default Header