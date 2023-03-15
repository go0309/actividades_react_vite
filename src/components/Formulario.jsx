import { useState, useEffect } from "react";
import Error from "./Error";

function Formulario({actividades,setActividades, actividad, setActividad}) {
  const [solicitud, setSolicitud] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [contenido, setContenido] = useState("");
  const [error, setError] = useState(false);


  //editar
useEffect(() => {
   if (Object.keys(actividad).length>0) {

      const {solicitud, empresa, email, alta, contenido }= actividad
      setSolicitud(solicitud)
      setEmpresa(empresa)
      setEmail(email)
      setAlta(alta)
      setContenido(contenido)
   }
}, [actividad])



  const handleSubmit = (e) => {
    e.preventDefault();

    const generarId = () => {
      const random = Math.random().toString(36).substring(2);
      const fecha = Date.now().toString(36)
      return random+fecha
    }
    //Validaciones de formulario
    if ([solicitud, empresa, email, alta, contenido].includes("")) {
      setError(true);
      return;
    }  
    setError(false);

     
      const objetoSolicitudes = {
        solicitud,
        empresa,
        email,
        alta,
        contenido,
       
      }
  
    

    if (actividad.id) {
      //Editar
      objetoSolicitudes.id =   actividad.id
      const actividadActualizar = actividades.map(actividadState => actividadState.id=== actividad.id ? objetoSolicitudes : actividadState)
      setActividades(actividadActualizar)
      setActividad({})
      
    }else{
     //Nuevo registro
      objetoSolicitudes.id =   generarId()
     // hacer una copia para ir alamcenando el objeto. 
     setActividades([...actividades, objetoSolicitudes])
    }


   

    // reiniciar formulario
    setSolicitud('')
    setEmpresa('')
    setEmail('')
    setAlta('')
    setContenido('')

  };
  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">
        Solicitudes de <span className="text-indigo-600">Actividades</span>{" "}
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añadir Actividades y {""}
        <span className="text-indigo-500 font-bold"> Administralas </span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error &&  <Error><p>Todos los campos son obligatorios</p> </Error>}
        <div className="mb-5">
          <label
            htmlFor="solicitud"
            className="block text-gray-700 uppercase font-bold"
          >
            Solicitud
          </label>
          <input
            id="solicitud"
            type="text"
            placeholder="Ingresa el asunto de tu solictud"
            className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-lg"
            value={solicitud}
            onChange={(e) => setSolicitud(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="empresa"
            className="block text-gray-700 uppercase font-bold"
          >
            Empresa
          </label>
          <input
            id="empresa"
            type="text"
            placeholder="Ingresa el nombre de la empresa"
            className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-lg"
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Ingresa su email"
            className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-lg"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="contenido"
            className="block text-gray-700 uppercase font-bold"
          >
            Contenido
          </label>
          <textarea
            id="contenido"
            placeholder="Ingrese la infomacion de su solicitud"
            className="border-2 w-full mt-2 p-2 placeholder-gray-400 rounded-lg"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-700 w-full p-3 text-white uppercase rounded-md font-bold hover:bg-indigo-600 cursor-pointer transition-colors"
          value={actividad.id ? 'Editar Actividad' : 'Agregar Actividad' }
        />
      </form>
    </div>
  );
}

export default Formulario;
