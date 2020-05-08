import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
//import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';
import Explore from './components/pages/Explore';
import Top10 from './components/pages/Top10';
import Themes from './components/pages/Themes';
import People from './components/pages/People';
import CultMovies from './components/pages/themes/CultMovies';
import FrenchNewWave from './components/pages/themes/FrenchNewWave';
import AmericaAmerica from './components/pages/themes/AmericaAmerica';

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
          <Route exact path="/Top10" component={Top10} />
          <Route exact path="/Themes" component={Themes} />
          <Route exact path="/People" component={People} />
          <Route exact path="/CultMovies" component={CultMovies} />
          <Route exact path="/FrenchNewWave" component={FrenchNewWave} />
          <Route exact path="/AmericaAmerica" component={AmericaAmerica} />
        </Container>
      </Router>
    );
  }
}

export default App;
