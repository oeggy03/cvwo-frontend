import "./commCard.css";

const Card = ({ title, desc, image, link }) => {
    return (
      <div className="card-container">
        <div className="image-container">
            <img src={image} alt='' />
        </div>

        <div className="cardContent">
            <div className="card-title">
                <h3>{title}</h3>
            </div>
            <div className="card-desc">
                <p>{desc}</p>
            </div>
        </div>
        <div className="btn">
            <a class="f6 link dim ba bw1 ph3 pv2 mb2 dib navy" href={"communities/" + link}>Check this out</a>
        </div>
      </div>
    );
  }
  
  export default Card;