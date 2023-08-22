import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({
    gastos,
    presupuesto, 
    setPresupuesto, 
    budgetIsValid, 
    setBudgetIsValid,
}) => {
  return (
    <header>
        <h1>Planificador de Gastos</h1>
        
        {budgetIsValid ? (
            <ControlPresupuesto 
                gastos={gastos}
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