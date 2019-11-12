import React from 'react';
// import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home";
// import NotFound from "./views/NotFound"
import { getUtils, getContams } from './scraper';
import UtilList from './UtilList';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      zipCode: 0,
      selectedUtility: 0,
      utilities: [],
      contaminants: [] 
    };
  }

  utilUpdate(value){
    this.setState({
      selectedUtility: value
    })
    console.log(value);
    this.getContams(value);
  };
  utilUpdates2(value){
    this.setState({
      utilities: value
    })
  };
  zipUpdate(value){
    this.setState({
      zipCode: value
    })
    this.getUtils(value);
  };
  contamUpdate(value){
    this.setState({
      contaminants: value
    })
  };

  async getUtils(zip){
    let utils = await getUtils(zip);
    this.utilUpdates2(utils.utils);
  }
  async getContams(utilId){
    let contaminants = await getContams(utilId);
    this.contamUpdate(contaminants);
    console.log(contaminants);
  }

render(){
  return (
    <div>
      {/* <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route component={NotFound}/>
      </Switch> */}
      <Home
          // utilUpdate=
          zipUpdate={this.zipUpdate.bind(this)}
      />
      <table>
        <UtilList
            data={this.state.utilities}
            utilUpdate={this.utilUpdate.bind(this)}
        />
      </table>
    </div>
  );
}
}

export default App;
