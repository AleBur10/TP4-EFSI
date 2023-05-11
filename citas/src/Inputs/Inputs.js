function Inputs(props) {
    return (
      <>
          <label>{props.label}</label>
          <input className="u-full-width" type={props.type} placeholder={props.holder}></input>
      </>
    );
  }
  
  export default Inputs;