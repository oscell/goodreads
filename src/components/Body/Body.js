import Filters from '../Filters/Filters';
import Results from '../Results/Results';

import "./Body.css";

function Body() {
    return (
        <div className='body_container'>
            <div className='filters_container'>
                <Filters />
            </div>
            <div className='results_container'>
                <Results />
            </div>
        </div>
    );
}

export default Body;
