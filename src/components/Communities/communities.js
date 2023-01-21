import { Component } from "react";
import Scroll from "../scrollFunc";
import SearchBox from "./searchBox";
import CardList from "./commListCards";
import './commCard.css'

class Browse extends Component {
    constructor() {
        super()
        this.state = {
            comms: [
              {
                id: "1",
                name: "Cats",
                image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
                desc: "lorem ipsum",
                link: "cats"
              },
              {
                id: "2",
                name: "Dogs",
                image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
                desc: "lorem ipsum",
                link: "dogs"
              }, 
              {
                id: "3",
                name: "Sheep",
                image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
                desc: "lorem ipsum",
                link: "sheeps"
              },
              {
                id: "1",
                name: "Cats",
                image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
                desc: "lorem ipsum",
                link: "cats"
              },
              {
                id: "1",
                name: "Cats",
                image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
                desc: "lorem ipsum",
                link: "cats"
              },
              {
                id: "1",
                name: "Cats",
                image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
                desc: "lorem ipsum",
                link: "cats"
              },
              {
                id: "1",
                name: "Cats",
                image: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
                desc: "lorem ipsum",
                link: "cats"
              },],
            searchfield: ''
        }
    }
    
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response=> response.json())
    //         .then(users => {this.setState({ robots: users})});
    // }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { comms, searchfield } = this.state;

        const filteredComms = comms.filter(comm =>{
          return comm.name.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !comms.length ?
          <h1>Loading</h1> :
          (
            <div>
              <Scroll>
                <h1 className='commListpageTitle'>Our Communities</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList comms={filteredComms} />
              </Scroll>
            </div>
          );
    }
}

export default Browse;