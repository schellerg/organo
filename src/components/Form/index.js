import { useState } from "react"

import "./style.css"

import Select from "../Select"
import TextField from "../TextField"
import Button from "../Button"

const Form = (props) => {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onAddTeamMember({ name, role, image, team });

    setName('');
    setRole('');
    setImage('');
    setTeam('');
  }

  return (
    props.toggleButton && <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <TextField id="name" label="Nome" placeholder="Digite seu nome" required value={name} onChange={setName} />
        <TextField id="role" label="Cargo" placeholder="Digite seu cargo" required value={role} onChange={setRole} />
        <TextField id="image" label="Imagem" placeholder="Informe o endereço da imagem" value={image} onChange={setImage} />
        <Select id="team" options={props.teams} label="Time" required value={team} onChange={setTeam} />
        <Button>Criar card</Button>
      </form>
    </section>
  )
}

export default Form