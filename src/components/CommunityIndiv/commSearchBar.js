const CommSearchbar = ({ searchfield, searchChange }) => {
    return (
        <div className=''>
            
            <input
                type='search'
                placeholder='Search for a post'
                className="searchBar"
                onChange={searchChange}
            />
        </div>
    );
}

export default CommSearchbar