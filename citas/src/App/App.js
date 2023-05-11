import './App.css';
import Titulos from '../Titulos/Titulos'
import Inputs from '../Inputs/Inputs';
import Cards from '../Cards/Cards';

function App() {
  return (
<div className="App">
      <Titulos className="Titulos" Size={'h1'} Titulo="ADMINISTRADOR DE PACIENTES" />
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <Titulos Size={'h2'} className="Titulos" Titulo="Crear mi cita" />
            <form>
              <Inputs label="Nombre Mascota" type="text" holder="Nombre Mascota" />
              
              <Inputs label="Nombre del dueño" type="text" holder="Nombre dueño de la mascota" />
              
              <Inputs label="Fecha" type="date" holder="Fecha" />
              
              <Inputs label="Hora" type="time" holder="Hora" />
              
              <Inputs label="Sintomas" type="textarea" holder="" />
              
              <button type="submit" class="u-full-width button-primary">Agregar Cita</button>
              </form>
          </div>
          <div class="one-half column">
          <Titulos Size={'h2'} className="Titulos" Titulo="Administra tus citas" />
            <Cards mascota="Nina" dueño="Martin" fecha="2021-08-05" hora="08:20" sintomas="Le duele la pierna" />
            <Cards mascota="Sifon" dueño="Flecha" fecha="2023-08-05" hora="09:24" sintomas="Duerme mucho" />
            <Cards mascota="Floki" dueño="Ari" fecha="2023-08-05" hora="16:15" sintomas="No está comiendo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
