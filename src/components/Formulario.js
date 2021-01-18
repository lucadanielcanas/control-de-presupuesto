import React, { useState } from 'react'
import shortid from 'shortid';
import PropTypes from 'prop-types';
import Error  from './Error';

const Formulario = ({ agregarNuevoGasto, crearGasto }) => {

    const [nombreGasto, setNombreGasto] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);

    //Cuando el usuario agrega un gasto
    const agregarGasto = e => {
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad) || nombreGasto.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        
        //construir gasto
        const gasto = {
            nombreGasto,
            cantidad,
            id: shortid.generate()
        }

        //pasar el gasto al componente principal
        agregarNuevoGasto(gasto);
        crearGasto(true);

        //resetear formulario
        setNombreGasto('');
        setCantidad(0);
    }

    return(
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aquí</h2>
        
            { error ? <Error mensaje="Presupuesto incorrecto."/> : null }

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Comida"
                    value={nombreGasto}
                    onChange={ e => setNombreGasto(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 1000"
                    value={cantidad}
                    onChange={ e => setCantidad(parseInt(e.target.value), 10)}
                />
            </div>

            <input 
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
    );
};

Formulario.propTypes = {
    agregarNuevoGasto: PropTypes.func.isRequired,
    crearGasto: PropTypes.func.isRequired
};

export default Formulario;