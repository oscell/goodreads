import './App.css';
import { liteClient as algoliasearch } from 'algoliasearch/lite';

import { InstantSearch } from 'react-instantsearch';
import SearchBar from './components/SearchBar/SearchBar.js';
import Body from './components/Body/Body.js';

const searchClient = algoliasearch('SUHU7TXF9F', '9563ae797facfe7085789e58dd6dddd3');


function App() {
  return (

        <InstantSearch searchClient={searchClient} indexName='Books'>
          <SearchBar />
          <Body />
        </InstantSearch>

  );
}

export default App;
