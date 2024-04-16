import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function Configurator({edition}) {

    const car = useSelector((state => state.config.version))

    const [getId, setId] =useState()

    function handle(event){
        setId(event.target.id)
    }

    useEffect(() => {
        console.log(getId);
    }, [getId])


    return (
        <div>
            {/* Config , {edition} */}
            <button id = {car[0].name} onMouseOver={handle}> test moddafucka</button>
        </div>
    );
}

export default Configurator;