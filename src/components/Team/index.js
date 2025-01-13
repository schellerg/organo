import Card from '../Card';
import './style.css';

const Team = (props) => {
  return (
    props.members.length > 0 &&
    <section className="team" style={{ backgroundColor: props.teamInfo.primaryColor }}>
      <div className="container">
        <h3>
          {props.teamInfo.title}
          <hr style={{ backgroundColor: props.teamInfo.secondaryColor }} />
        </h3>
        <div className="team-list">
          {props.members.map((item) => <Card key={item.name} name={item.name} role={item.role} image={item.image} cardColor={props.teamInfo.secondaryColor} />)}
        </div>
      </div>
    </section>
  )
}

export default Team;