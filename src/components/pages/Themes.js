import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import GetThemes from '../GetThemes';
import ThemeList from '../../data/theme_list.json';

export class Themes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      themes: [],
      currentTheme: 'browse',
    };
  }

  componentDidMount() {
    this.setState({ themes: ThemeList.themes });
  }

  render() {
    return (
      <Container>
        <GetThemes
          themes={this.state.themes}
          currentTheme={this.state.currentTheme}
        />
      </Container>
    );
  }
}

export default Themes;
