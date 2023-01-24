import { Link } from "react-router-dom";

const CommSearchbar = ({ statusSI, searchfield, searchChange }) => {
    return (
        <div className='searchAndCreate'>
            <input
                type='search'
                placeholder='Search for a post'
                className="searchBar"
                onChange={searchChange}
            />
            {statusSI ? <Link className="f6 link dim ph3 pv2 mb2 dib white bg-navy createPostBut" to="create" >+ Create post</Link>: null}
        </div>
    );
}

export default CommSearchbar