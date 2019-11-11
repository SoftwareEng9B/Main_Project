import React from 'react';
import './Home.css';

function Home() {
    return (
        <body>
            <h1>
            Water Cleanliness by Zip Code
            </h1>
            <form action="search.php">
            <fieldset>
            <p>
            <input name="search" type="text" placeholder="Enter Zip..." />
            <button class="button" type="submit">
            <span><b>Search</b></span>
            </button>
            </p>
            </fieldset>
            </form>   
        </body>
    );
}

export default Home;
