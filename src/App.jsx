import { useState } from 'react'
import Header from './components/Header'

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
    </div>
  )
}

export default App
