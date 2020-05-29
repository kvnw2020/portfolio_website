import React, { Component } from 'react'
import '../App.css'

class Nav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrolled: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () =>{
            const isTop = window.scrollY < 501
            console.log(window.scrollY)
            if( isTop !== true) {
                this.setState({scrolled: true})
            }
            else {
                this.setState({scrolled: false})
            }
        })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll')
    }

    render() {

        const scrolll = this.state.scrolled

        return(
            <nav id='nav'>
                <ul>
                    <li><a href="#intro" className="active">Introduction</a></li>
                    <li><a href="#first">Skills</a></li>
                    <li><a href="#second">Projects</a></li>
                    <li><a href="#cta">Contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav