import { useState } from "react";

import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";

const teams = [
  {
    title: "Programação",
    primaryColor: "#d9f7e9",
    secondaryColor: "#57c278",
  },
  {
    title: "Front-end",
    primaryColor: "#E8F8FF",
    secondaryColor: "#82CFFA"
  },
  {
    title: "Data Science",
    primaryColor: "#F0F8E2",
    secondaryColor: "#A6D157"
  },
  {
    title: "Devops",
    primaryColor: "#FDE7E8",
    secondaryColor: "#E06B69"
  },
  {
    title: "UX e Design",
    primaryColor: "#FAE9F5",
    secondaryColor: "#DB6EBF"
  },
  {
    title: "Mobile",
    primaryColor: "#FFF5D9",
    secondaryColor: "#FFBA05"
  },
  {
    title: "Inovação e Gestão",
    primaryColor: "#FFEEDF",
    secondaryColor: "#FF8A29"
  }]

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [toggleButton, setToggleButton] = useState(true);

  const onAddTeamMember = (teamMember) => {
    setTeamMembers([...teamMembers, teamMember]);
  }

  return (
    <div>
      <Banner />
      <Form teams={teams} toggleButton={toggleButton} onAddTeamMember={onAddTeamMember} />

      <div className="main-title">
        <h1>Minha organização:</h1>
        <hr />
        <button className="toggle-form" onClick={() => setToggleButton(!toggleButton)}>{!toggleButton ? 'Exibir' : 'Ocultar'} formulário</button>
      </div>
      {teams.map((item) => <Team key={item.title} teamInfo={item} members={teamMembers.filter((member) => member.team === item.title)} />)}
      <Footer />
    </div>
  );
}

export default App;
