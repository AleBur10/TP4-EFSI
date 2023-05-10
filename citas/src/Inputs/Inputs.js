function Nombres({NombreMascota, NombreDueño, Fecha, Hora, Sintomas}) {
    return (
      <>
          <p className="NombreMascota">{NombreMascota}</p>
          <p className="NombreDueño">{NombreDueño}</p>
          <p className="Fecha">{Fecha}</p>
          <p className="Hora">{Hora}</p>
          <p className="Sintomas">{Sintomas}</p>
      </>
    );
  }
  
  export default Titulos;
  