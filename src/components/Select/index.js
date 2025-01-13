import "./style.css"

const Select = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value)
  }

  return (
    <div className="select">
      <label htmlFor={props.id}>{props.label}</label>
      <select id={props.id} required={props.required} value={props.value} onChange={handleChange}>
        <option value=''></option>
        {props.options.map((item) => <option key={item.title} value={item.title}>{item.title}</option>)}
      </select>
    </div>
  )
}

export default Select;