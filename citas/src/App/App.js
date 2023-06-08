import { useState } from 'react';
import './App.css';
import Titulos from '../Titulos/Titulos'
import Inputs from '../Inputs/Inputs';
import Cards from '../Cards/Cards';

const random = () => Math.random().toString(36).slice(2);

function App() {
  // const [input, setInput] = useState('');
  const [citas, setCitas] = useState([
    {
      "id": random(),
      "mascota": "Nina",
      "dueño": "Martin",
      "fecha": "2021-08-05",
      "hora": "08:20",
      "sintomas": "Le duele la pierna"
    },
    {
      "id": random(),
      "mascota": "Sifon",
      "dueño": "Flecha",
      "fecha": "2023-08-05",
      "hora": "09:24",
      "sintomas": "Duerme mucho"
    },
    {
      "id": random(),
      "mascota": "Florki",
      "dueño": "Ari",
      "fecha": "2023-08-05",
      "hora": "16:15",
      "sintomas": "No está comiendo"
    }
  ])
  const agregarCita = (e) => {
    e.preventDefault();
    setCitas([...citas,
    {
      id: random(),
      mascota: e.target.mascota.value,
      dueño: e.target.dueño.value,
      fecha: e.target.fecha.value,
      hora: e.target.hora.value,
      sintomas: e.target.sintomas.value,
    }
    ]);
    console.log(citas);
    e.target.mascota.value = "";
    e.target.dueño.value = "";
    e.target.fecha.value = "";
    e.target.hora.value = "";
    e.target.sintomas.value = "";
  }

  const eliminarCita = (id) => {
    setCitas(
      citas.filter(cita => cita.id !== id)
    )
  }

  return (
    <div className="App">
      <Titulos className="Titulos" Size={'h1'} Titulo="ADMINISTRADOR DE PACIENTES" />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Titulos Size={'h2'} classNameName="Titulos" Titulo="Crear mi cita" />
            <form onSubmit={(e) => agregarCita(e)}>
              <Inputs name="mascota" label="Nombre Mascota" type="text" holder="Nombre Mascota" />

              <Inputs name="dueño" label="Nombre del dueño" type="text" holder="Nombre dueño de la mascota" />

              <Inputs name="fecha" label="Fecha" type="date" holder="Fecha" />

              <Inputs name="hora" label="Hora" type="time" holder="Hora" />

              <Inputs name="sintomas" label="Sintomas" type="textarea" holder="" />

              <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
            </form>
          </div>
          <div className="one-half column">
            <Titulos Size={'h2'} className="Titulos" Titulo="Administra tus citas" />
            {citas.map(cita => 
            <>
              <Cards eliminarCita={eliminarCita} id={cita.id} mascota={cita.mascota} dueño={cita.dueño} fecha={cita.fecha} hora={cita.hora} sintomas={cita.sintomas}/>
            </> )}


           
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;
