import React, { Component } from 'react';
import MovieList from '../../../data/america_america.json';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Image from 'react-bootstrap/Image';
import Media from 'react-bootstrap/Media';

export class CultMovies extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    this.setState({ films: MovieList.america_america });
  }

  render() {
    return (
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/Explore">Explore</Breadcrumb.Item>
          <Breadcrumb.Item href="/Themes">Themes</Breadcrumb.Item>
          <Breadcrumb.Item active>America, America</Breadcrumb.Item>
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
                src="http://s3.amazonaws.com/criterion-production/explore_images/301-0905c4b1ee2c847d8ecc9e46659cce52/spotlight_MrFreedom2_original.jpg"
              />
              <Card.Body className={'card-text mx-4 my-4'}>
                <h4>
                  <strong>America, America</strong>
                </h4>
                Call it star-spangled skepticism—there’s a whole host of movies
                in the collection that celebrate the United States by taking a
                hard, clear-eyed look at it. Uncompromising documentaries,
                historical dramas, surreal countercultural head trips: these are
                films that wrestle with the idea and reality of America, from
                the Civil War (Ride with the Devil) to the bicentennial (Dazed
                and Confused) to the contemporary political landscape (Tanner
                ’88).
              </Card.Body>
            </Media>
          </Card>
        </Col>

        <Row>
          {this.state.films.map((film) => {
            return (
              <Col xs={6} sm={5} md={4} lg={4} xl={4} key={film.title + 'Col'}>
                <Card className={'card-style my-3'} key={film.title}>
                  <Card.Img
                    className={'card-style'}
                    variant="top"
                    src={film.image}
                  />
                  <Card.Body>
                    <Card.Title className={'card-text'}>
                      {film.title}
                    </Card.Title>
                    <Card.Text>{film.director}</Card.Text>
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

export default CultMovies;
