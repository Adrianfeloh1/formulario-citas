import Form from "./components/Form";
import { useState, useEffect } from "react";
import Cita from "./components/Cita";

const App = () => {
  //8. citas en el localstorage
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));
  if (!citasIniciales) {
    citasIniciales = []
  }//8.1 si no hay citasIniciales entonces que inicie como arreglo vacío

  //arreglo de citas
  const [citas, guardarCitas] = useState(citasIniciales); //8.2 se pasa en el state 

  //7. useEffect para realizar ciertas operaciones cuando el state cambia
  // en este caso para guardar las citas en el localstorage(minibase de datos de strings)
  useEffect(()=> {
    //8. citas en el localstorage redeclarada
    let citasIniciales = JSON.parse(localStorage.getItem("citas"));
    if(citasIniciales){
      localStorage.setItem("citas", JSON.stringify(citas))
    } else {
      localStorage.setItem("citas", JSON.stringify([]))
    }
  }, [citas] ) //7.1 para que useEffect solo se ejecute una vez, se debe pasa el arreglo vacío []


  //Función que tome las citas actuales del form y agregue la nueva
  const crearCita = (cita) => {
    //3.3.1 ponemos la cita diligenciada en el arreglo
    guardarCitas([
      ...citas, // siempre tomamos copia y le pasamos la nueva cita
      cita,
    ]);
  };

  //5. función que eliminar la cita por el id
  const eliminarCita = id =>{
    //console.log(id); usamos filter
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas);
  }

  //6. mensaje condicional para cuando no hayan citas console.log(citas.length)
  const mensaje = citas.length === 0 ?  "No hay citas"   : "Programa tu cita";


  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form crearCita={crearCita} />
          </div>

          <div className="one-half column">
            {/* 6.1 se pasa la variable*/}
            <h2>{mensaje}</h2>
            {citas.map((cita) => (
              <Cita 
                key={cita.id} 
                cita={cita}
                eliminarCita={eliminarCita} />//5.1 pasar la función eliminarCita
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
