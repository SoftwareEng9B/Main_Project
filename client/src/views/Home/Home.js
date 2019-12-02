import React from 'react';
import './Home.css';

function Home(props) {

    const inputRef = React.createRef();
    
    function zipcodeUpdate(){
        props.zipcodeUpdate(inputRef.current.value);
    }

    return (
        <div class="container"> 
            <div class="jumbotron vertical-center">
                <h1 class="col-md-6">Water Cleanliness by Zip Code</h1>
                <p class="col-md-6">Enter your zip code to recieve a list of providers for your area.
                    Click on a provider to display a list of contaminants in that water supply.
                </p>
            </div>
            <div class="row">
            <form class= "col-md-6 offset-md-4" onSubmit={event => {event.preventDefault(); zipcodeUpdate()}}>
                <fieldset>
                    <p>
                        <input ref={inputRef} name="search" type="text" placeholder="Enter your zip code..." />
                        <button className="button" type='submit'>
                            <span><b>Search</b></span>
                        </button>
                    </p>
                </fieldset>
            </form>
            </div>   
        </div>
    );
}

export default Home;
