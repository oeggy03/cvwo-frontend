import { Link } from "react-router-dom";

const CommSearchbar = ({ searchfield, searchChange }) => {
    return (
        <div className='searchAndCreate'>
            <input
                type='search'
                placeholder='Search for a post'
                className="searchBar"
                onChange={searchChange}
            />
            {window.localStorage.getItem("isSignedIn") ? <Link className="f6 link dim ph3 pv2 mb2 dib white bg-navy createPostBut" to="create" >+ Create my own post</Link>: null}
        </div>
    );
}

export default CommSearchbar