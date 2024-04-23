import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax';
import Hero from './Hero';
import Header from './Header';
import Models from './Models';

function LandingPage({ openSelector }) {
    return (

        <ParallaxProvider>
            <Header />
            <Hero />
            <Models openSelector={openSelector}/>
        </ParallaxProvider>
    )
}

export default LandingPage
