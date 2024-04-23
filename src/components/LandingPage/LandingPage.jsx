import React from 'react'

function LandingPage({openSelector}) {
  return (
    <>
    <div>LandingPage</div>
    <button onClick={() => openSelector(true)} className='text-2xl bg-red-800 p-4'>Open Selector</button>
    </>
  )
}

export default LandingPage