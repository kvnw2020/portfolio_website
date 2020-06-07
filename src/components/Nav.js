import React, { Component } from 'react'
import '../App.css'

class Nav extends Component {


    render() {

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