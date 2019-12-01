import React from 'react';
import './Home.css';

function Home(props) {

    const inputRef = React.createRef();
    
    function zipcodeUpdate(){
        props.zipcodeUpdate(inputRef.current.value);
    }

    return (
        <div> 
            <div class="jumbotron vertical-center">
                <h1>Water Cleanliness by Zip Code</h1>
            </div>
            <form onSubmit={event => {event.preventDefault(); zipcodeUpdate()}}>
                <fieldset>
                    <p>
                        <input ref={inputRef} name="search" type="text" placeholder="Enter Zip..." />
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
