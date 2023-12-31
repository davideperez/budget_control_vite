import { useState, useEffect } from 'react'
import CloseBtn from '../img/cerrar.svg'

const Modal = ({
    setModal, 
    animarModal, 
    setAnimarModal, 
    guardarGasto, 
    gastoEditar,
    setGastoEditar
}) => {

    const [mensaje, setMensaje] = useState('')
    
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')


    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)

          }
    }, [])
    
    const ocultarModal = () => {
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)
        }, 500) 
    }

    const handleSubmit = e   => {
        e.preventDefault()

        //validation
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('All fields are mandatory.')
            
            setTimeout(()=>{
                setMensaje('')
            },3000)

            return
        } 
        
        //Saves the expense.
        guardarGasto({nombre, cantidad, categoria, id, fecha})

    }

    return (
        <div className="modal" >
            <div className="cerrar-modal">
                <img 
                    src={CloseBtn} 
                    alt="cerrar modal" 
                    onClick={ocultarModal}
                />
            </div>
            <form 
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
            >
                <legend>{gastoEditar.nombre ? 'Edit Expense' : 'New Expense'}</legend>
                { mensaje && <Mensaje tipo='error' >{ mensaje }</Mensaje> } 
                <div className='campo'>
                    <label htmlFor="nombre">Expense Name</label>
                    <input 
                        id='nombre'
                        type="text" 
                        placeholder='Enter the name of the expense..'
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Amount</label>
                    <input 
                        id='cantidad'
                        type="number" 
                        placeholder='Enter the amount of the expense, ie: $300'
                        value={cantidad}
                        onChange={ e => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="categoria">Category</label>
                    
                    <select 
                        id="categoria"
                        value={categoria}
                        onChange={ e => setCategoria(e.target.value)}
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
                <input 
                    type="submit"
                    value={gastoEditar.nombre ? 'Save Changes' : 'Add Expense'}
                />
            </form>
        </div>
  )
}

export default Modal