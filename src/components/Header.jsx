import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

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
            <ControlPresupuesto 
                presupuesto={presupuesto}
            />
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