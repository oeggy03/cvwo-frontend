import "./commCard.css"

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className=''>
            
            <input
                type='search'
                placeholder='Search for your favourite community'
                className="searchBar"
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;
