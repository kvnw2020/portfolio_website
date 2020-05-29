import React from 'react'
import typing from '../images/typing.gif'

function Intro() {
    return(
        <section id="intro" className="main">
            <div className="spotlight">
                <div className="content">
                    <header className="major">
                        <h2>About Me</h2>
                    </header>
                    <p>Hey, there. I am an aspiring software developer who mainly focuses on frontend development. 
                I graduated Brooklyn College with a degree in Mathematics. After graduation, 
                I dabbled with various technologies like Python, Django, and matplotlib. 
                Most of my time were spend on HTML, CSS, JavaScript, and React. 
                I mainly taught myself and am continuously refining and learning about my craft. You will find some
                of my works further down my page.</p>
                
                </div>
                <span className="image"><img src={typing} alt="" /></span>
            </div>
        </section>
    )
}

export default Intro