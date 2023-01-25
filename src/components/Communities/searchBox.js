import { Link } from "react-router-dom";
import "./commCard.css"

const SearchBox = ({ searchfield, searchChange, statusSI }) => {
    return (
        <div className='searchBarDiv'>
            
            <input
                type='search'
                placeholder='Search for your favourite community'
                className="searchBar"
                onChange={searchChange}
            />
            {statusSI ? <Link class="f6 link dim ph3 pv2 mb2 dib white bg-navy createCommButton" to="#0">Create a community</Link>:null}
        </div>
    );
}

export default SearchBox;
