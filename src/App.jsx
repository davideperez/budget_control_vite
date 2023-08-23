import { useState, useEffect } from 'react'

import Header from './components/Header'
import Filtros from './components/Filtros'
import ListadoGastos from './components/ListadoGastos'
import Modal from './components/Modal'

import { generarId } from './helpers'
import IconoNuevoGasto from './img/nuevo-gasto.svg'

function App() {
  const [gastos, setGastos] = useState(
    localStorage.getItem('gastos') ? JSON.parse(localStorage.getItem('gastos')) : []
  )
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem('presupuesto')) ?? 0
  )
  const [budgetIsValid, setBudgetIsValid] = useState(false)
  
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  
  const [gastoEditar, setGastoEditar] = useState({})

  const [filtro, setFiltro] = useState('')
  const [gastosFiltrados, setGastosFiltrados] = useState('')


  
  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true)
      
      setTimeout(() => {
        setAnimarModal(true)
      }, 500) 
    
    }
  }, [gastoEditar])

  //Saves presupuesto to local storage.
  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  
  }, [presupuesto])
  
  //Save gastos to LocalStorage
  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  //Filters the expenses.
  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter( gasto => gasto.categoria === filtro)

      setGastosFiltrados(gastosFiltrados)
    }
  }, [filtro])
  
  //Saves presupuesto to local storage the first time the app charges.
  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem('presupuesto')) ?? 0

    if (presupuestoLS > 0) {
      setBudgetIsValid(true)
    }
  }, [presupuesto])

  const handleNuevoGasto = () => {
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 500) 
  
  }
  
  const guardarGasto = gasto => {
    
    if (gasto.id) {
      //Update Expense
      const gastosActualizados = gastos.map( gastoOriginal => gastoOriginal.id === gasto.id ? gasto : gastoOriginal)
      setGastos(gastosActualizados)
      setGastoEditar({})
    } else {
      //Create Expense
      gasto.id = generarId()
      gasto.fecha = Date.now()
      setGastos([...gastos, gasto])

    }  

    setAnimarModal(false)
    setTimeout(() => {
        setModal(false)
    }, 500) 
  }

  const eliminarGasto = id => {
    const gastosActualizados = gastos.filter( gastoActual => gastoActual.id !== id )
    setGastos(gastosActualizados)
  }

  return (
    <div className= { modal ? 'fijar': ''}>

      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        budgetIsValid={budgetIsValid}
        setBudgetIsValid={setBudgetIsValid}
      />
      
      {budgetIsValid && (
        <>
          <main>
            <Filtros 
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <ListadoGastos 
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          </main>
          <div className='nuevo-gasto' >
            <img 
              src={IconoNuevoGasto} 
              alt="icono nuevo gasto"
              onClick={handleNuevoGasto}
              />
          </div>
        </>
        
      )}
      
      {modal && 
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      }
    </div>
  )
}

export default App
