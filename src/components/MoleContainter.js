import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'



function MoleContainer(props){
    let [ displayMole, setDisplayMole] = useState(false)

    const handleMole = (e) => {
        props.setScore( props.score + 1)
        setDisplayMole(false)
    }
    let display = displayMole ? <Mole setDisplayMole={setDisplayMole} handleMole={handleMole} setScore={props.setScore}/> : <EmptySlot setDisplayMole={setDisplayMole}/>
    return(
        <div style={{'display': 'inline-block'}}>
            {display}
        </div>
    )
}

export default MoleContainer