import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [budgetIsValid, setBudgetIsValid] = useState(false)
  return (
    <div>
      
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        budgetIsValid={budgetIsValid}
        setBudgetIsValid={setBudgetIsValid}
      />
      
      {budgetIsValid && (
        <div className='nuevo-gasto' >
          <img 
            src={IconoNuevoGasto} 
            alt="icono nuevo gasto"
          />
        </div>
      )}

    </div>
  )
}

export default App
