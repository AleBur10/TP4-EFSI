function Inputs(props) {
  let input = props.type === "textarea" ? <textarea className="u-full-width" placeholder={props.holder} name={props.name}></textarea> : <input className="u-full-width" type={props.type} placeholder={props.holder} name={props.name}></input>
    return (
      <>
          <label>{props.label}</label>
          {input}
      </>
    );
  }
  
  export default Inputs;