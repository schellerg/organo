import "./style.css";

const Card = ({ name, role, image, cardColor }) => {
  return (
    <article className="card">
      <figure className="header" style={{ backgroundColor: cardColor }}>
        <img src={image} alt={name} />
      </figure>
      <div className="footer">
        <h4>{name}</h4>
        <p>{role}</p>
      </div>
    </article>
  )
}

export default Card;