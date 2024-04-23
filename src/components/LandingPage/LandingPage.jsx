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
            <Models />
            <button onClick={() => openSelector(true)} className='text-2xl bg-red-800 p-4'>Open Selector</button>
        </ParallaxProvider>
    )
}

export default LandingPage
