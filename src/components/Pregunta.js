import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types';
import Error from './Error';

const Pregunta = ({ setPresupuesto, setRestante, setPregunta }) => {
    
    //Definir el state
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false);
    
    //Funcion que lee el presupuesto
    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value), 10);
    };

    //Submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }

        setError(false);
        setPresupuesto(cantidad);
        setRestante(cantidad);
        setPregunta(false);
    };


    return(
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
        
            { error ? <Error mensaje="El presupuesto no es valido." /> : null }

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}
Pregunta.propTypes =  {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setPregunta: PropTypes.func.isRequired
}
export default Pregunta;