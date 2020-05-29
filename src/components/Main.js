import React, { Component } from 'react'
import Intro from './Intro'
import SkillsSection from './SkillsSection'
import ProjectsSection from './ProjectsSection'
import MiniProjectSection from './MiniProjectSection'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
        this.setState({ windowWidth, windowHeight });
    }

    render(){

        const { windowWidth } = this.state;

        return(
            <div id='main'>
                <Intro />
                <SkillsSection />
                {windowWidth > 768 ? <ProjectsSection /> : <MiniProjectSection />}
            </div>
        )
    }
}

export default Main