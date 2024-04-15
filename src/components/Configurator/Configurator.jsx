import React, { useState } from 'react'

function Configurator() {
    const [div1Shown, setDiv1Shown] = useState(true);

    const handleButtonClick = () => {
        setDiv1Shown(false);
    };


    return (
        <div>
            <button onClick={handleButtonClick}>Show div2</button>
            {div1Shown ? (
                <div className="div1">Div1</div>
            ) : (
                <div className="div2">Div2</div>
            )}
        </div>
    );
}

export default Configurator;