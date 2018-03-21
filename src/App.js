import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

// Components
import Container from './Container';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path="/" component={ () => <Container /> } />
            <Route path="/cats" component={ () => <Container keyword="cats" /> } />
            <Route path="/dogs" component={ () => <Container keyword="dogs" /> } />
            <Route path="/computers" component={ () => <Container keyword="computers" /> } />
            <Route path="/search" render={ (props) => <Container url={props.match.url} /> } />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
