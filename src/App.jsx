import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoActividades from "./components/ListadoActividades";

function App() {
  
  const [actividades, setActividades] = useState(() => JSON.parse(localStorage.getItem('actividades')) || []);
  const [actividad, setActividad] = useState({});


/*   useEffect(() => {
    const obtenerLS = () => {
      const actividadesLs =
        JSON.parse(localStorage.getItem("actividades")) ?? [];
      setActividades(actividadesLs);
    };
    obtenerLS();
  }, []); */

  useEffect(() => {
   
    localStorage.setItem("actividades", JSON.stringify(actividades));
  }, [actividades]);

  const eliminarActividad = (id) => {
    const actividadesActualizadas = actividades.filter(
      (actividad) => actividad.id !== id
    );

    setActividades(actividadesActualizadas);
  };

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          actividades={actividades}
          setActividades={setActividades}
          actividad={actividad}
          setActividad={setActividad}
        />
        <ListadoActividades
          actividades={actividades}
          setActividad={setActividad}
          eliminarActividad={eliminarActividad}
        />
      </div>
    </div>
  );
}

export default App;
