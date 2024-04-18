import React from 'react'

function PaintView({ carousselImages }) {
  return (
    <>
    <div className="w-3/5 h-full flex justify-center items-center">
                        <img src={carousselImages} alt="visuel voiture" />
                    </div>
    </>
  )
}

export default PaintView