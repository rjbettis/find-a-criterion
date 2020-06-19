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
import GetPerson from './components/GetPerson';
import Home from './components/pages/Home';
import Browse from './components/pages/Browse';

class App extends Component {
  state = {
    themes: [],
  };

  render() {
    return (
      <Router>
        <Container fluid={true} className="zero-padding">
          <Navigation />
          <Route exact path="/" component={Home} />
          <Route exact path="/explore" component={Explore} />
          <Route exact path="/explore/top10" component={Top10} />
          <Route exact path="/explore/themes" component={Themes} />
          <Route exact path="/explore/people" component={People} />
          <Route exact path="/explore/themes/:theme" component={GetTheme} />
          <Route exact path="/explore/people/:person" component={GetPerson} />
          <Route exact path="/browse" component={Browse} />
        </Container>
      </Router>
    );
  }
}

export default App;
