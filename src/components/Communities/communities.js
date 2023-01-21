import { Component } from "react";
import Scroll from "./scrollFunc";
import SearchBox from "./searchBox";
import CardList from "./commListCards";
import './commCard.css'

class Browse extends Component {
    constructor() {
        super()
        this.state = {
            comms: ["Cats", "Dogs", "NUS", "CVWO"],
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
          return comm.toLowerCase().includes(searchfield.toLowerCase());
        })

        return !comms.length ?
          <h1>Loading</h1> :
          (
            <div>
              <h1 className='commListpageTitle'>Our Communities</h1>
              <SearchBox searchChange={this.onSearchChange}/>
              <Scroll>
                <CardList comms={filteredComms} />
              </Scroll>
            </div>
          );
    }
}

export default Browse;