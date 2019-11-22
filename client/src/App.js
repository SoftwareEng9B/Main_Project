import React from 'react';
import Home from "./views/Home/Home";
import UtilList from './UtilList';
import { getUtils, getContams } from './scraper';
import SimpleMap from './SimpleMap';
// import { Route, Switch, Redirect  } from 'react-router-dom';
// import NotFound from "./views/NotFound"
const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAw6nNDn_HeWc1PVvTcynfEufYbgTtv004'
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
        <Home
            zipcodeUpdate={this.zipcodeUpdate.bind(this)}
        />
        <SimpleMap zipcode={this.state.zipcode} zipCoords={this.state.zipCoords}/>      
        <UtilList
            utils={this.state.utils}
            contams={this.state.contams}
            zipcode={this.state.zipcode}
            selectedUtil={this.state.selectedUtil}
            selectedUtilUpdate={this.selectedUtilUpdate.bind(this)}         
        />
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
