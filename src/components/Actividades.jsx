import React from "react";

const Actividades = ({actividad, setActividad, eliminarActividad}) => {
  const {solicitud, empresa, email,alta,  contenido, id} = actividad
   const handleEliminar = () =>{
    const respuesta = confirm('Deseas eliminar esa actividad?')
      if (respuesta) {
        eliminarActividad(id)
      }
   }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-800 uppercase">
        Solicitud: {""}
        <span className="font-normal normal-case">{solicitud}</span>
      </p>

      <p className="font-bold mb-3 text-gray-800 uppercase">
        empresa: {""}
        <span className="font-normal normal-case">{empresa}</span>
      </p>

      <p className="font-bold mb-3 text-gray-800 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-800 uppercase">
        Fecha: {""}
        <span className="font-normal normal-case">{alta}</span>
      </p>

      <p className="font-bold mb-3 text-gray-800 uppercase">
        Contenido: {""}
        <span className="font-normal normal-case">{contenido}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button type="button" onClick={() => setActividad(actividad)} className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">Editar</button>
        <button type="button" onClick={ handleEliminar} className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg">Eliminar</button>
      </div>
    </div>
  );
};

export default Actividades;
