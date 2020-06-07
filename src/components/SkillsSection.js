import React from 'react'
import firstIcon from '../images/REACT.png'
import secondIcon from '../images/JS.png'
import thirdIcon from '../images/CSS_HTML.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

class SkillsSection extends React.Component {

    componentDidMount() {
        AOS.init({
            duration : 700,
            
        })
    }

    render() {
        return(
            <section id="first" className="main special">
                <header className="major">
                    <h2>Skills</h2>
                </header>
                <ul className="features">
                    <li data-aos='slide-right'>                    
                        <img src={firstIcon} className='displaylogo' height='100' width='150' alt="My app" ></img>
                    </li>
                    <li data-aos='slide-up'>
                        <img src={secondIcon} className='displaylogo' height='100' width='100' alt="My app" ></img>
                    </li>
                    <li data-aos='slide-left'>
                        <img src={thirdIcon} className='displaylogo' height='100' width='150' alt="My app" ></img>
                    </li>
                </ul>
            </section>
        )
    }
}

export default SkillsSection