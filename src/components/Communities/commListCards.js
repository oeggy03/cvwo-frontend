import Card from "./commCard";
import "./commCard.css"

const CardList = ({ comms }) => {
    return (
      <div className="cardList">
        <Card
            title = 'Cats'
            desc = 'lorem ipsum'
            image = 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg'
            link = 'cats'
        />
        {/* {
          robots.map((user, i) => {
            return (
              <Card
                title = 'cats'
                desc
                image = ''
                />
            );
          })
        } */}
      </div>
    );
  }
  
  export default CardList;