import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import combinedJson from './Combined';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Image from 'react-bootstrap/Image';

export class GetTheme extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    if (this.props.location.state.currentJsonObject === 'america_america') {
      this.setState({ films: combinedJson.america_america });
    } else if (
      this.props.location.state.currentJsonObject === 'french_new_wave'
    ) {
      this.setState({ films: combinedJson.french_new_wave });
    } else if (this.props.location.state.currentJsonObject === 'amour_fou') {
      this.setState({ films: combinedJson.amour_fou });
    } else if (this.props.location.state.currentJsonObject === 'animals') {
      this.setState({ films: combinedJson.animals });
    } else if (this.props.location.state.currentJsonObject === 'avant_garde') {
      this.setState({ films: combinedJson.avant_garde });
    } else if (
      this.props.location.state.currentJsonObject === 'blue_christmases'
    ) {
      this.setState({ films: combinedJson.blue_christmases });
    } else if (
      this.props.location.state.currentJsonObject === 'british_realism'
    ) {
      this.setState({ films: combinedJson.british_realism });
    } else if (
      this.props.location.state.currentJsonObject === 'cannes_big_winners'
    ) {
      this.setState({ films: combinedJson.cannes_big_winners });
    } else if (
      this.props.location.state.currentJsonObject === 'classic_hollywood'
    ) {
      this.setState({ films: combinedJson.classic_hollywood });
    } else if (this.props.location.state.currentJsonObject === 'comedies') {
      this.setState({ films: combinedJson.comedies });
    } else if (
      this.props.location.state.currentJsonObject === 'compare_and_contrast'
    ) {
      this.setState({ films: combinedJson.compare_and_contrast });
    } else if (this.props.location.state.currentJsonObject === 'cult_movies') {
      this.setState({ films: combinedJson.cult_movies });
    } else if (this.props.location.state.currentJsonObject === 'cut') {
      this.setState({ films: combinedJson.cut });
    } else if (
      this.props.location.state.currentJsonObject === 'documentaries'
    ) {
      this.setState({ films: combinedJson.documentaries });
    } else if (
      this.props.location.state.currentJsonObject === 'dysfunctional_families'
    ) {
      this.setState({ films: combinedJson.dysfunctional_families });
    } else if (
      this.props.location.state.currentJsonObject === 'faith_on_film'
    ) {
      this.setState({ films: combinedJson.faith_on_film });
    }

    this.setState({
      currentTheme: this.props.location.state.currentTheme,
      currentSummary: this.props.location.state.currentSummary,
      currentImage: this.props.location.state.currentImage,
    });

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

        <Col className={'theme-card-style my-3'}>
          <Card className={'theme-card-style'}>
            <Media>
              <Card.Img
                width={448}
                height={230}
                className={'theme-card-style my-4 mx-1'}
                src={currentImage}
              />
              <Card.Body className={'movie-card-text mx-4 my-4'}>
                <h4>
                  <strong>{currentTheme}</strong>
                </h4>
                {currentSummary}
              </Card.Body>
            </Media>
          </Card>
        </Col>

        <Row>
          {this.state.films.map((film) => {
            return (
              <Col xs={6} sm={5} md={4} lg={4} xl={4} key={film.title + 'Col'}>
                <Card className={'card-style my-3'} key={film.title}>
                  <Card.Img variant="top" src={film.image} />
                  <Card.Body>
                    <Card.Title className={'movie-title'}>
                      {film.title}
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
