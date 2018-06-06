import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import  Home from './components/home/index';
import Flights from './components/flights/index';
import FlightDetails from './components/flightDetails/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/flights' component={Flights} />
          <Route exact path='/flight/:id' component={FlightDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
