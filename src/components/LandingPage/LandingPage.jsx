import React from 'react'

import Hero from './Hero';
import Header from './Header';
import Models from './Models';

function LandingPage({ openSelector }) {
    return (

        <>
            <Header />
            <Hero />
            <Models openSelector={openSelector} />
        </>
    )
}

export default LandingPage
