import React from 'react'
import secDemo from '../images/demoapp2.gif'
import demo from '../images/appDemo.gif'

function ProjectsSection() {
    return(
        <section id="second" className="main special">
            <header className="major">
                <h2>Projects</h2>
            </header>
            <ul className="statistics">
                <li className="style1">
                    <img src={demo} height='400' width='400' alt="My app" ></img>
                    <p>Etiam</p>
                </li>
                <li className="style2">
                    <img src={secDemo} height='400' width='400' alt="My app" ></img>
                    <p>Magna</p>
                </li>
            </ul>
        </section>
    )
}

export default ProjectsSection