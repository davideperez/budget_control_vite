import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [presupuesto, setPresupuesto] = useState(0)
  const [budgetIsValid, setBudgetIsValid] = useState(false)
  const [modal, setModal] = useState(false)

  const handleNuevoGasto = () => {
    setModal(true)
  }
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
            onClick={handleNuevoGasto}
          />
        </div>
      )}
      
      {modal && <p>Desde Modal</p>}
    </div>
  )
}

export default App
