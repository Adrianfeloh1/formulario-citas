import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


const Form = ({ crearCita }) => {
  const [cita, actualizarCita] = useState({
    paciente: "",
    acompañante: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  //4. creamos un state con el error de validación
  const [error, actualizarError] = useState(false);

  //1. función onChange que se ejecuta cada vez que el usuario escribe en el input
  const actualizarInput = (e) => {
    actualizarCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  //2. Extraemos los valores
  const { paciente, acompañante, fecha, hora, sintomas } = cita;
  //2.1 lo pasamos en un nuevo value en los inputs para mas adelante hacer el reset

  //cuando el usuario presiona agregar cita

  const submitCita = (e) => {
    e.preventDefault();
    //3.1 lo primero es validar que se llenen los campos
    if (
      paciente.trim() === "" ||
      acompañante.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      //4.1 en caso que el campo esté vacío, se muestra el error
      actualizarError(true);
      return;
    }
    // eliminar el mensaje previo
    actualizarError(false);

    //3.2 asignar un ID
    //instalamos npm i uuid y despues la importamos
    cita.id = uuidv4();

    //3.3 crear la cita
    crearCita(cita);

    //3.4 reiniciar el form
    //llamamos el state actualizarCita con sus valores que ya estan en el return
    actualizarCita({
      paciente: "",
      acompañante: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <>
      <h2>Formulario de citas</h2>
      <form onSubmit={submitCita}>
        <label htmlFor="">Nombre del Paciente</label>
        <input
          type="text"
          name="paciente"
          className="u-full-width"
          placeholder="Nombre del Paciente"
          onChange={actualizarInput}
          value={paciente}
        />
        <label htmlFor="">Nombre del acompañante</label>
        <input
          type="text"
          name="acompañante"
          className="u-full-width"
          placeholder="Nombre del acompañante"
          onChange={actualizarInput}
          value={acompañante}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarInput}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={actualizarInput}
          value={hora}
        />
        <label>Síntomas</label>

        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={actualizarInput}
          value={sintomas}
        />

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
        {/* 4.2 con un if ternario si no llena campos, se muestra el p */}
        {error ? <p className="alerta-error">Debes llenar los campos</p> : null}        
      </form>
    </>
  );
};

export default Form;
