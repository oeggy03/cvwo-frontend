import "./commCard.css";
import { Link } from "react-router-dom";

const Card = ({ title, desc, image, link }) => {
    return (
      <div className="card-container">
        <div className="image-container">
            <img src={image} alt="Icon" />
        </div>

        <div className="cardContent">
            <div className="card-title">
                <h3 className="titleOfCard">{title}</h3>
            </div>
            <div className="card-desc">
                <p className="descOfCard">{desc}</p>
            </div>
        </div>
        <div className="btn">
            <Link className="f6 link dim ba bw1 ph3 pv2 mb2 dib navy" to={link}>Check this out</Link>
        </div>
      </div>
    );
  }
  
  export default Card;