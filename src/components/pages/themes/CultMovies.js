import React, { Component } from 'react';
import MovieList from '../../../data/cult_movies.json';
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
    this.setState({ films: MovieList.cult_movies });
  }

  render() {
    return (
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/Explore">Explore</Breadcrumb.Item>
          <Breadcrumb.Item href="/Themes">Themes</Breadcrumb.Item>
          <Breadcrumb.Item active>Cult Movies</Breadcrumb.Item>
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
                src="http://s3.amazonaws.com/criterion-production/explore_images/1-071cd2004e5e0e1bc13fdd5b22620d56/explore_horror_original.jpg"
              />
              <Card.Body className={'card-text mx-4 my-4'}>
                <h4>
                  <strong>Cult Movies</strong>
                </h4>
                Though many drive-ins have been shut down, and the practice of
                screening midnight movies in theaters has waned considerably
                from its heyday in the early 1970s, the thrill of sharing
                boundary-testing films in the dark can now be enjoyed just as
                well while curled up on the couch—no accompanying cult required.
                From the whiff of exploitation emanating from Roger Vadim’s
                sensational And God Created Woman to the touch of snuff in
                Michael Powell’s voyeuristic Peeping Tom, these films delicately
                ride the line between pulp and art, always landing firmly in the
                latter camp. Who better to challenge cinematic standards than
                Samuel Fuller, with his unforgettable B melodramas Shock
                Corridor and The Naked Kiss, or Brian De Palma, whose
                wonderfully nasty Sisters ushered in a new era of thrilling
                post-Hitchcock stylish excess? These films stubbornly refuse to
                be marginalized, lower budgets and lack of Hollywood gloss be
                damned.
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
