import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
// import NotFound from "./views/NotFound"
import scrape from './scraper'
import UtilList from './UtilList';




class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      zipCode: 0,
      selectedUtility: 0,
      utilities: [] 
    };
  }

  utilUpdate(value){
    this.setState({
      selectedUtility: value
    })
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

  async getUtils(zip){
    let utils = await scrape.getUtils(zip);
    console.log(utils);
    this.utilUpdates2(utils);

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
      <UtilList
          data={this.state.utilities}
      />
    </div>
  );
}
}

export default App;
