import Card from "./commCard";
import "./commCard.css"

const CardList = ({ statusSI, comms }) => {
    return (
      <div className="cardList">
        {
          comms.map((comm, i) => {
            return (
              <Card
                title = {comms[i].name}
                desc = {comm.desc}
                image = {comm.image}
                link = {comm.link}
              />
            );
          })
        }
      </div>
    );
  }
  
  export default CardList;