import React, { useState } from 'react'
import Mensaje from './Mensaje'


const NuevoPresupuesto = ({
    presupuesto, 
    setPresupuesto, 
    setBudgetIsValid
}) => {

    const [ mensaje, setMensaje ] = useState('')

    const handlePresupuesto = (e) => {
        e.preventDefault()

        //Validates the input.
        if (!presupuesto || presupuesto < 0) {
            setMensaje("No es un presupuesto valido")

            return
        }   
        
        //Deletes messages once a correct value is entered.
        setMensaje('')
        setBudgetIsValid(true)
        
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario' action="">
            <div className='campo'>
                <label htmlFor="">Definir Presupuesto</label>
                <input
                    className='nuevo-presupuesto'
                    type="number"
                    placeholder='Añáde tu presupuesto'
                    value={presupuesto}
                    onChange={ e => setPresupuesto(Number(e.target.value))}
                />
            </div>
            <input type="submit" value='Añadir' />
            {mensaje &&  <Mensaje tipo="error" >{mensaje}</Mensaje>} 
        </form>
    </div>
  )
}

export default NuevoPresupuesto