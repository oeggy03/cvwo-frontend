import { useEffect, useState } from "react";
import SearchBox from "./searchBox";
import CardList from "./commListCards";
import './commCard.css'

const Browse = ({statusSI}) => {
    const [comms, setComms] = useState([])
    const [searchfield, setSearchfield] = useState("")
    const [filteredComms, setFiltered] = useState([])
    

    useEffect(() => {
      fetch('http://localhost:3001/api/GetCommunities')
      .then(response => response.json())
      .then(comm => {setComms(comm); setFiltered(comm);})

    },[])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
        setFiltered(comms.filter(comm =>{
          return (comm.name.toLowerCase().includes(searchfield.toLowerCase())
                  || comm.desc.toLowerCase().includes(searchfield.toLowerCase()))}))
    }

    return (
        <div className="allCommunityMain">
            <h1 className='commListpageTitle'>Our Communities</h1>
            <SearchBox searchChange={(event) => onSearchChange(event)} statusSI={statusSI}/>
            <CardList comms={filteredComms} />
        </div>
      );
}

export default Browse;