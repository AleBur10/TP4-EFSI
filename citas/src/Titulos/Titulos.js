function Titulos({ Titulo, Size }) {
  return (
    Size === "h1" ?  <h1 className="Titulos">{Titulo}</h1> : <h2 className="Titulos">{Titulo}</h2> 
    //Hicimos un if en donde el signo de pregunta son es la llave y los dos puntos es el else
    //=== es tipo y valor
  );
}

export default Titulos;
