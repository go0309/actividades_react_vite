import {useEffect} from "react";
import Actividades from "./Actividades";

function ListadoActividades({ actividades, setActividad, eliminarActividad }) {
  
  useEffect(() =>{
    
    if (actividades.length>0) {
      // console.log('Nueva actividad agregada')
    }
  }, [actividades])

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {actividades && actividades.length ? (
        <>
          <h2 className="font-black text-3xl text-center ">
            Listado de <span className="text-indigo-600">Actividades</span>{" "}
          </h2>
          <p className="text-xl mt-5 text-center mb-10 ">
            Administra tus {""}{" "}
            <span className="text-indigo-500 font-bold">Actividades</span>
          </p>
          {actividades.map((actividad) => (
            <Actividades
              key={actividad.id}
              actividad={actividad}
              setActividad={setActividad}
              eliminarActividad={eliminarActividad}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center ">
            No hay<span className="text-indigo-600">Actividades</span>{" "}
          </h2>
          <p className="text-xl mt-5 text-center mb-10 ">
            Comienza Agregando {""}{" "}
            <span className="text-indigo-500 font-bold">Actividades</span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoActividades;
