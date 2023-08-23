import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({
    setGastos,
    gastos,
    presupuesto, 
    setPresupuesto, 
    budgetIsValid, 
    setBudgetIsValid,
}) => {
  return (
    <header>
        <h1>Budget Planner</h1>
        
        {budgetIsValid ? (
            <ControlPresupuesto 
                gastos={gastos}
                setGastos={setGastos}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setBudgetIsValid={setBudgetIsValid}
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