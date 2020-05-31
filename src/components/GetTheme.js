import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import combinedJson from './Combined';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Image from 'react-bootstrap/Image';
import ThemeList from '../data/theme_list.json';

export class GetTheme extends Component {
  state = {
    films: [],
    data: combinedJson,
  };

  componentDidMount() {
    var keys = Object.keys(this.state.data);

    var i;
    for (i in keys) {
      if (this.props.match.params.theme === keys[i]) {
        this.setState({
          films: combinedJson[keys[i]],
          currentTheme: ThemeList.themes[i].title,
          currentSummary: ThemeList.themes[i].summary,
          currentImage: ThemeList.themes[i].image,
        });
      }
    }

    window.scrollTo(0, 0);
  }

  render() {
    const currentTheme = this.state.currentTheme;
    const currentSummary = this.state.currentSummary;
    const currentImage = this.state.currentImage;

    return (
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/Explore">Explore</Breadcrumb.Item>
          <Breadcrumb.Item href="/Explore/Themes">Themes</Breadcrumb.Item>
          <Breadcrumb.Item active>{currentTheme}</Breadcrumb.Item>
        </Breadcrumb>

        <Col className={'heading-style'}>
          <Image src="https://d2ffltj98nrzzh.cloudfront.net/assets/explore/explore_themes-013678553972c91e850a42072f55022a.gif" />
        </Col>

        <Col lg={12}>
          <Row>
            <Col className={'theme-card-style my-3'}>
              <Card className={'theme-card-style'}>
                <Card.Img
                  width={448}
                  height="auto"
                  className={'theme-card-style my-4 mx-1'}
                  src={currentImage}
                />
              </Card>
            </Col>
            <Col className={'theme-card-style my-3'}>
              <Card className={'theme-card-style'}>
                <Card.Body className={'movie-card-text '}>
                  <h4>
                    <strong>{currentTheme}</strong>
                  </h4>
                  {currentSummary}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Row>
          {this.state.films.map((film) => {
            var criterionUrl = film.criterionUrl;
            console.log(film.director);
            return (
              <Col lg={4} key={film.title + 'Col'}>
                <Card className={'card-style my-3'} key={film.title}>
                  <Card.Img variant="top" src={film.image} />
                  <Card.Body>
                    <Card.Title className={'movie-title'}>
                      <a href={criterionUrl}>{film.title}</a>
                    </Card.Title>
                    <Card.Text className={'movie-director'}>
                      {film.director}
                    </Card.Text>
                  </Card.Body>
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
