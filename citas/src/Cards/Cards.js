function Cards(props) {
    return (
      <div className="cita">
        <p>Mascota: <span>{props.mascota}</span></p>
        <p>Dueño: <span>{props.dueño}</span></p>
        <p>Fecha: <span>{props.fecha}</span></p>
        <p>Hora: <span>{props.hora}</span></p>
        <p>Sintomas: <span>{props.sintomas}</span></p>
        <button class="button elimnar u-full-width">Eliminar ×</button>
      </div>
    );
  }
  
  export default Cards;