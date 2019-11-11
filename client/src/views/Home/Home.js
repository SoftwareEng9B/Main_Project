import React from 'react';
import './Home.css';
import scrape from '../../scraper';


function Home(props) {
    const refer = React.createRef();
    
    function getUtils(){
        props.zipUpdate(refer.current.value);

    }
    return (
        <div>
            <h1>
            Water Cleanliness by Zip Code
            </h1>
            <form onSubmit={event => {event.preventDefault(); getUtils()}}>
            <fieldset>
            <p>
            <input ref = {refer} name="search" type="text" placeholder="Enter Zip..." />
            <button className="button" type='submit'>
            <span><b>Search</b></span>
            </button>
            </p>
            </fieldset>
            </form>   
        </div>
    );
}

export default Home;
