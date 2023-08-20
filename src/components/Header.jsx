import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({
    presupuesto, 
    setPresupuesto, 
    budgetIsValid, 
    setBudgetIsValid 
}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        
        {budgetIsValid ? (
            <p>Presupuesto es Valido</p>
        ):(
            <NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setBudgetIsValid={setBudgetIsValid}
            / >
        )}
        
    </header>
  )
}

export default Header