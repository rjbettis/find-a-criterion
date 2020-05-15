import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import Explore from './components/pages/Explore';
import Top10 from './components/pages/Top10';
import Themes from './components/pages/Themes';
import People from './components/pages/People';
import GetTheme from './components/GetTheme';

class App extends Component {
  state = {
    details: [],
  };

  render() {
    return (
      <Router>
        <Container fluid={true}>
          <Navigation />
          <Route exact path="/Explore" component={Explore} />
          <Route exact path="/Explore/Top10" component={Top10} />
          <Route exact path="/Explore/Themes" component={Themes} />
          <Route exact path="/Explore/People" component={People} />
          <Route exact path="/Explore/Themes/GetTheme" component={GetTheme} />
        </Container>
      </Router>
    );
  }
}

export default App;
