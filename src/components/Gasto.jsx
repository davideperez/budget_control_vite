import React from 'react'

const Gasto = ({gasto}) => {
    const {categoria, cantidad, nombre, id } = gasto
  return (
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
            <div className='descripcion-gasto'>
                <p className='categoria'>{categoria}</p>
                <p className='nombre'>{nombre }</p>
            </div>
        </div>
    </div>
  )
}

export default Gasto