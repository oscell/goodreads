import { Hits } from "react-instantsearch";
import './Results.css';


function Hit({ hit }) {
    return (
        <div className="gallery">
            <div className="card">
                <img 
                    src={hit.coverImage} 
                    alt={hit.objectID} 
                />
                <div className="card-content"> {/* Set background color to red */}
                    <h2>{hit.title}</h2>
                    <p>{hit.author}</p>
                    <a href={hit.objectID} className="button">
                        Find out more 
                        <span className="arrow-icon">→</span>
                    </a>
                </div>
            </div>
        </div>
    );
  }


function Results() {
    return (
        <Hits 
            hitComponent={Hit}
            classNames={{
              item: 'responsive',
              list: 'custom-Hits-list'
            }}
        />
    );
    }

export default Results;
