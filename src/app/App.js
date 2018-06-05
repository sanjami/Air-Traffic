import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import  Home from './components/home/index';
import Flights from './components/flights/index';
import { FlightsDetails } from './components/flightsDetails/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/flights' component={Flights} />
          <Route exact path='/flights/:id' component={FlightsDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
