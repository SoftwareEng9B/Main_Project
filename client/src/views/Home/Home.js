import React from 'react';
import './Home.css';

function Home(props) {

    const inputRef = React.createRef();
    
    function zipcodeUpdate(){
        props.zipcodeUpdate(inputRef.current.value);
    }

    return (
        <div>
            <h1>
                Water Cleanliness by Zip Code
            </h1>
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
