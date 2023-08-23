import { useState, useEffect } from 'react'

const Filtros = ({filtro, setFiltro}) => {
  return (
    <div className='filtros sombra contenedor'>
        <form 
        >
            <div className='campo'>
                <label htmlFor="">Filter Expesnes</label>
                <select 
                    value={filtro}
                    onChange={e => setFiltro(e.target.value)}
                >
                        <option value="">-- Select --</option>
                        <option value="ahorro">Savings</option>
                        <option value="comida">Food</option>
                        <option value="casa">Home</option>
                        <option value="gastos">Vairous</option>
                        <option value="ocio">Leisure</option>
                        <option value="salud">Health</option>
                        <option value="suscripciones">Suscriptions</option>
                </select>
            </div>
        </form>
    </div>
  )
}

export default Filtros