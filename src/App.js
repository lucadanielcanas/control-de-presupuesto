import React, { useState, useEffect } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  
  //definir el state
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [ mostrarPregunta, setPregunta] = useState(true);
  const [ gastos, setGastos ] = useState([]);
  const [ gasto, setGasto ] = useState({});
  const [creargasto, setCrearGasto] = useState(false);

  //useEffect que actualiza el restante
  useEffect(() => {
    //agrega el nuevo presupuesto

    if(creargasto) {
      setGastos([
        ...gastos,
        gasto
      ]);

      //resta el presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante);

      //resetear a false
      setCrearGasto(false);
    }
  }, [gasto]);

  return (
    <div className="container">
      <header>
      
        <h1>Mis Gastos</h1>
        
        <div className="contenido-principal contenido">
          { mostrarPregunta ? 
          (
            <Pregunta 
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setPregunta={setPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario 
                  agregarNuevoGasto={setGasto}
                  crearGasto={setCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado 
                  gastos={gastos}
                />
                <ControlPresupuesto 
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      
      </header>
    </div>
  );
}

export default App;
