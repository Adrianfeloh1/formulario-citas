import React from "react";

const Cita = ({ cita, eliminarCita }) => {
    //5.2 la traemos al componente para el evento onClick del button
  return (
    <div className="cita">
      <p>Paciente: <span>{cita.paciente}</span> </p>
      <p>Acompañante: <span>{cita.acompañante}</span> </p>
      <p>Fecha: <span>{cita.fecha}</span> </p>
      <p>Hora: <span>{cita.hora}</span> </p>
      <p>Síntomas: <span>{cita.sintomas}</span> </p>

      <button
        className="button eliminar u-full-with"
        /* 5.2 se pasa como arrow function para que espere a que suceda el onclick 
        y elimine la cita por el id*/
        onClick={()=> eliminarCita(cita.id)}

      >Eliminar &times;
      </button>
    </div>
  );
};

export default Cita;
