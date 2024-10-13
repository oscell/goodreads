import { Hits } from "react-instantsearch";


function Hit({ hit }) {
    return (
      <div>
        <a href={hit.objectID}>{hit.title}</a>  
        <p>{hit.author}</p>
        {/* {hit.coverImage && <img src={hit.coverImage} alt={hit.objectID} style={{ width: '100px', height: '100px' }} />} */}
      </div>
    );
  }


function Results() {
    return (
        <Hits hitComponent={Hit} />
    );
    }

export default Results;