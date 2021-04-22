import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import legacyThemes from '../data/themes/legacy_themes.json';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Image from 'react-bootstrap/Image';
import ThemeList from '../data/theme_list.json';

export class GetTheme extends Component {
  state = {
    films: [],
    data: legacyThemes,
  };

  componentDidMount() {
    // Creates an array of keys from the json files in Combined.js
    var keys = Object.keys(this.state.data);

    /* 
    Checks the dynamic react router param from the URL against the keys array. If it matches one of the keys 
    then the required data to render the page (currentTheme, CurrentSummary, CurrentImage) are set to states.
    An array of films that match the key are set to the 'films' state.
    */
    var i;
    for (i in keys) {
      if (this.props.match.params.theme === keys[i]) {
        this.setState({
          films: legacyThemes[keys[i]],
          currentTheme: ThemeList.themes[i].title,
          currentSummary: ThemeList.themes[i].summary,
          currentImage: ThemeList.themes[i].image,
        });
      }
    }

    window.scrollTo(0, 0);
  }

  render() {
    return (
      <Container>
        {/* Navigation component */}
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/explore">Explore</Breadcrumb.Item>
          <Breadcrumb.Item href="/explore/themes">Themes</Breadcrumb.Item>
          <Breadcrumb.Item active>{this.state.currentTheme}</Breadcrumb.Item>
        </Breadcrumb>

        {/* Theme image */}
        <Col className={'heading-style'}>
          <Image src="https://find-a-criterion.s3-us-west-1.amazonaws.com/explore-images/Themes_Font.gif" />
        </Col>

        {/*
         * Displays theme image, title and summary in a card
         * Displays large card
         */}
        <Col>
          <Row>
            <Col className={'theme-card-style my-3'}>
              <Card className={'theme-card-style'}>
                <Card.Img
                  width={448}
                  height="auto"
                  className={'theme-card-style my-4 mx-1'}
                  src={this.state.currentImage}
                />
              </Card>
            </Col>
            <Col className={'theme-card-style my-3'}>
              <Card className={'theme-card-style'}>
                <Card.Body className={'card-text mx-4'}>
                  <h4>
                    <strong>{this.state.currentTheme}</strong>
                  </h4>
                  {this.state.currentSummary}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        {/*
         * Displays theme image, title and summary in a card
         * Displays small card
         */}
        <Col>
          <Row>
            <Col className={'theme-card-style-small mt-3'}>
              <Card className={'theme-card-style-small'}>
                <Card.Img
                  width={448}
                  height="auto"
                  className={'theme-card-style-small my-4 mx-1'}
                  src={this.state.currentImage}
                />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className={'theme-card-style-small'}>
              <Card className={'theme-card-style-small'}>
                <Card.Body className={'card-text '}>
                  <h4>
                    <strong>{this.state.currentTheme}</strong>
                  </h4>
                  {this.state.currentSummary}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        {/* Maps through 'films' state to display data in cards. */}
        <Row>
          {this.state.films.map((film, index) => {
            return (
              <Col xs={12} sm={12} md={6} lg={4} xl={4} key={film.film + 'Col'}>
                <Card className={'card-style-blue-text my-3'} key={index}>
                  <Card.Img variant="top" src={film.image} />
                  <Card.Body>
                    <Card.Title className={'movie-title'}>
                      {film.film}
                    </Card.Title>
                    <Card.Text className={'card-text'}>
                      {film.director}
                    </Card.Text>
                  </Card.Body>
                  <a href={film.criterionUrl} className="stretched-link">
                    {' '}
                  </a>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default GetTheme;
