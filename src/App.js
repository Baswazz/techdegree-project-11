import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Container from './Container';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ () => <Container /> } />
          <Route path="/cats" component={ () => <Container keyword="cats" /> } />
          <Route path="/dogs" component={ () => <Container keyword="dogs" /> } />
          <Route path="/computers" component={ () => <Container keyword="computers" /> } />
          <Route path="/search" render={ (props) => <Container url={props.match.url} /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
