import { Component } from "react";
import Scroll from "../scrollFunc";
import SearchBox from "./searchBox";
import CardList from "./commListCards";
import './commCard.css'

class Browse extends Component {
    constructor() {
        super()
        this.state = {
            comms: [],
            searchfield: ''
        }
    }
    componentDidMount() {
      console.log("MOUNTED")
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const { comms, searchfield } = this.state;

        const filteredComms = comms.filter(comm =>{
          return (comm.name.toLowerCase().includes(searchfield.toLowerCase())
                  || comm.desc.toLowerCase().includes(searchfield.toLowerCase()));
        })

        return (
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