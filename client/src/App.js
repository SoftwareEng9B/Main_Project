import React from 'react';
import Home from "./views/Home/Home";
import UtilList from './UtilList';
import { getUtils, getContams } from './scraper';
// import { Route, Switch, Redirect  } from 'react-router-dom';
// import NotFound from "./views/NotFound"

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      zipcode: null,
      selectedUtil: {},
      utils: [],
      contams: [] 
    };
  }

  async zipcodeUpdate(value){    
    let utilData = await getUtils(value);
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

  render(){
    return (
      <div>      
        <Home
            zipcodeUpdate={this.zipcodeUpdate.bind(this)}
        />
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
