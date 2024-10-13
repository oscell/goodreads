import { SearchBox } from 'react-instantsearch';
import './SearchBar.css'; // Make sure to import the CSS file

function SecondayHeader() {
    return (
        <div className='search_container'>
            <SearchBox />
        </div>
    );
}

export default SecondayHeader;
