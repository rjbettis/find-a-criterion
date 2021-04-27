import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Container from 'react-bootstrap/Container';
import Explore from './components/Explore';
import Top10 from './components/Top10';
import Themes from './components/Themes';
import People from './components/People';
import GetTheme from './components/GetTheme';
import GetPerson from './components/GetPerson';
import Home from './components/Home';

class App extends Component {
  state = {
    themes: [],
  };

  render() {
    return (
      <Router>
        <Container fluid={true} className="zero-padding">
          <Route exact path="/" component={Home} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/explore/top10" component={Top10} />
          <Route exact path="/explore/themes" component={Themes} />
          <Route exact path="/explore/people" component={People} />
          <Route exact path="/explore/themes/:theme" component={GetTheme} />
          <Route exact path="/explore/people/:person" component={GetPerson} />
        </Container>
      </Router>
    );
  }
}

export default App;
