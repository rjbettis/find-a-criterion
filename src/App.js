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
    themes: [],
  };

  render() {
    return (
      <Router>
        <Container fluid={true}>
          <Navigation />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/explore/top10" component={Top10} />
          <Route exact path="/explore/themes" component={Themes} />
          <Route exact path="/explore/people" component={People} />
          <Route exact path="/explore/themes/:theme" component={GetTheme} />
        </Container>
      </Router>
    );
  }
}

export default App;
