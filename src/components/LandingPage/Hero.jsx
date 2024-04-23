import React from 'react'

import heroVideo from '../../assets/videos/hero.mp4'

function Hero() {
    return (
        <div className='relative'>
            <video autoPlay loop muted src={heroVideo} className='w-screen'></video>
            <div className='text-slate-100 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2  w-1/2 bg-slate-900 bg-opacity-50 py-8 px-12 flex flex-col gap-4'>
                <h3 className='text-3xl font-bold'>MADE BY RACERS</h3>
                <p>En 1955, Jean Rédélé, entrepreneur passionné, fonde Alpine sur trois piliers : agilité, élégance, esprit de compétition. </p>
                <p>Conçue par des pilotes pour ceux qui veulent maîtriser l’asphalte, la légende Alpine s’est érigée à travers des victoires mythiques, et un engagement sportif sans limite.</p>
                <p>Depuis 2016, à travers notre nouvelle gamme A 110, nous continuons à gravir tous les échelons du sport automobile. Demain, nous voulons réinventer la sportivité automobile avec des technologies innovantes issues de la Formule 1, pour des pilotes passionnés.</p>
            </div>
        </div>
    
    )
}

export default Hero
