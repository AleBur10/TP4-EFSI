function Inputs(props) {
    return (
      <div>
          <label>{props.label}</label>
          <input className="u-full-width" type={props.type} placeholder={props.holder}></input>
      </div>
    );
  }
  
  export default Inputs;