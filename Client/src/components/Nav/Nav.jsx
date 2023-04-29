import SearchBar from "../SearchBar/SearchBar";
import {Link} from 'react-router-dom';


const Nav = ({onSearch}) => {

    return (
        <nav>
            <div>
                <Link to='/home'>HOME</Link>
            
                <Link to='/about'>ABOUT</Link>
            
                <Link to='/favorites'>FAVORITES</Link>

                <Link to='/'>LOGOUT</Link>
            </div>  
            <SearchBar onSearch={onSearch}/>
        </nav>
    )
}


export default Nav;
