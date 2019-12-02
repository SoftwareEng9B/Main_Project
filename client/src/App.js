import React from 'react';
import Home from "./views/Home/Home";
import UtilList from './views/UtilList/UtilList';
import { getUtils, getContams } from './scraper';
import SimpleMap from './SimpleMap';
// import { Route, Switch, Redirect  } from 'react-router-dom';
// import NotFound from "./views/NotFound"
const googleMapsClient = require('@google/maps').createClient({
  key: ENV['GOOGLE_MAPS_CLIENT_KEY']
  // key: require('./config').GOOGLE_MAPS_CLIENT_KEY
});

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      zipcode: null,
      selectedUtil: {},
      utils: [],
      contams: [],
      zipCoords: null
    };
  }

  async zipcodeUpdate(value){    
    let utilData = await getUtils(value);
    this.zipCoordsUpdate(value);
    this.setState({
      zipcode: value,
      selectedUtil: {},
      utils: utilData.utils,
      contams: []
    })
  };

  async selectedUtilUpdate(value){    
    let contamData = await getContams(value.link);
    this.setState({
      selectedUtil: value,
      contams: contamData.contams
    })
  };

  zipCoordsUpdate(value){
    // Geocode an address.
    googleMapsClient.geocode({
      address: value
    }, function(err, response) {
      if (!err) {
        this.setState({
          zipCoords: response.json.results[0].geometry.location
        });
      }
    }.bind(this));
  }

  render(){
    return (
      <div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossOrigin="anonymous"></link>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
        <div class="container">
        <Home
            zipcodeUpdate={this.zipcodeUpdate.bind(this)}
        />
        <div class="row">
        <div class="col-md-8">
        <UtilList
            utils={this.state.utils}
            contams={this.state.contams}
            zipcode={this.state.zipcode}
            selectedUtil={this.state.selectedUtil}
            selectedUtilUpdate={this.selectedUtilUpdate.bind(this)}         
        />
        </div>
        <div class="col-md-4">
        <SimpleMap zipcode={this.state.zipcode} zipCoords={this.state.zipCoords}/>  
        </div>    
        </div>
        </div>
        {/* <Switch>
          <Route exact path="/Home" component={Home} />
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route component={NotFound}/>
        </Switch> */}
      </div>
    );
  }
}

export default App;
