import React from 'react'
import coffee from '../images/animat-coffee.gif'
import styled, { keyframes } from 'styled-components'
import { slideInDown } from 'react-animations'

const SlideInDownAnimation = keyframes`${slideInDown}`;
const SlideInDownDiv = styled.div`animation: 1s ${SlideInDownAnimation};`;

function TitleLogo() {
    return(
        <header id="header" className="alt">
            <SlideInDownDiv><img src={coffee} className='myLogo' height='210' width='210' alt="" /></SlideInDownDiv>
            <h1>Kevin Wang</h1>
            <p>Front End Developer</p>
        </header>
    )
}

export default TitleLogo