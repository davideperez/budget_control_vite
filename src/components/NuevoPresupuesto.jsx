import { useState } from 'react'
import Mensaje from './Mensaje'


const NuevoPresupuesto = ({
    presupuesto, 
    setPresupuesto, 
    setBudgetIsValid
}) => {

    const [ mensaje, setMensaje ] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault()

        if (!presupuesto || presupuesto < 0) {
            setMensaje("Budget value not valid.")

            return
        }   
        
        setMensaje('')
        setBudgetIsValid(true)
        
    }
    return (
        <div className='contenedor-presupuesto contenedor sombra'>
            <form onSubmit={handlePresupuesto} className='formulario' action="">
                <div className='campo'>
                    <label htmlFor="">Set a Budget</label>
                    <input
                        className='nuevo-presupuesto'
                        type="number"
                        placeholder='Add Budget'
                        value={presupuesto}
                        onChange={ e => setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <input type="submit" value='Add Budget' />
                {mensaje &&  <Mensaje tipo="error" >{mensaje}</Mensaje>} 
            </form>
        </div>
    )
}

export default NuevoPresupuesto