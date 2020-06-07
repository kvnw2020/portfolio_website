import React from 'react'
import secDemo from '../images/demoapp2.gif'
import demo from '../images/appDemo.gif'
import AOS from 'aos'
import 'aos/dist/aos.css'

class MiniProjectSection extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 700,
            
        })
    }

    render() {
        return(
            <section id="second" className="main special">
                <header className="major">
                    <h2>Projects</h2>
                </header>
                <ul className="statistics">
                    <li className="style1" data-aos='slide-right'>
                        <img src={demo} height='250' width='250' alt="My app" ></img>
                        <p>About to throw away a plastic bottle? A finished can of coke? Use this app to help you find the nearest public recycling bin in NYC.</p>
                    </li>
                    <li className="style2" data-aos='slide-left'>
                        <a href="https://kvnw2020.github.io/toDoList/" target='_blank'>
                        <img src={secDemo} height='250' width='250' alt="My app" ></img>
                        </a>
                        <p>This app allows you to enter tasks as checkboxes. It acts as a reminder and lets you know when you completed each one.</p>
                    </li>
                </ul>
            </section>
        )
    }
}

export default MiniProjectSection