import { useEffect } from 'react'
import mole from '../mole.png'

function Mole (props){
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.setDisplayMole(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return(
        <div>
            <img  alt='mole'style={{'width': '30vw'}}  src={mole} onClick={props.handleMole}/>
        </div>
    )
}

export default Mole