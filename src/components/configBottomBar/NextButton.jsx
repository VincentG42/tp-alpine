import { useDispatch, useSelector } from 'react-redux'
import { changeCurrentOption } from '../../features/options/optionsSlice'

function NextButton() {

    const dispatch = useDispatch()

    const nextOption = ['Jantes', 'Sellerie', 'Equipements',  'Récapitulatif', 'Merci de votre visite']
    const currentOption =useSelector((store) => store.options.currentOption)



    function handleCurrentOption() {
        dispatch(changeCurrentOption())
    }



    return (
        <div onClick={handleCurrentOption} className='cursor-pointer font-bold text-xl'>{nextOption[currentOption]}</div>
    )
}

export default NextButton