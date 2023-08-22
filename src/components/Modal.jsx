import { useState } from 'react'
import CloseBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {

    const [mensaje, setMensaje] = useState()
    
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const [categoria, setCategoria] = useState('')

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500) 
    }

    const handleSubmit = e   => {
        e.preventDefault()

        //validation
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios.')
            
            setTimeout(()=>{
                setMensaje('')
            },3000)

            return
        } 
        
        //Saves the expense.
        guardarGasto({nombre, cantidad, categoria})

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
                <legend>Nuevo Gasto</legend>
                { mensaje && <Mensaje tipo='error' >{ mensaje }</Mensaje> } 
                <div className='campo'>
                    <label htmlFor="nombre">Nombre Gasto</label>
                    <input 
                        id='nombre'
                        type="text" 
                        placeholder='Ingresa el nombre del Gasto'
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Cantidad</label>
                    <input 
                        id='cantidad'
                        type="number" 
                        placeholder='Ingresa el cantidad del gasto, ej: 300'
                        value={cantidad}
                        onChange={ e => setCantidad(Number(e.target.value))}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="categoria">Categoria</label>
                    
                    <select 
                        id="categoria"
                        value={categoria}
                        onChange={ e => setCategoria(e.target.value)}
                    >
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos Varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input 
                    type="submit"
                    value='Agregar Gasto'
                />
            </form>
        </div>
  )
}

export default Modal