import "./style.css"

const TextField = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value)
  }

  return (
    <div className="textfield">
      <label htmlFor={props.id}>{props.label}</label>
      <input id={props.id} placeholder={props.placeholder} required={props.required} type="text" value={props.value} onChange={handleChange} />
    </div>
  )
}

export default TextField