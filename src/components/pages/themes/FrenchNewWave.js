import React, { Component } from 'react';
import MovieList from '../../../data/french_new_wave.json';
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
    this.setState({ films: MovieList.french_new_wave });
  }

  render() {
    return (
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/Explore">Explore</Breadcrumb.Item>
          <Breadcrumb.Item href="/Themes">Themes</Breadcrumb.Item>
          <Breadcrumb.Item active>French New Wave</Breadcrumb.Item>
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
                src="https://s3.amazonaws.com/criterion-production/explore_images/61-966c4c982e70b3c24fedfa18d086ea57/704_025_w_original.jpg"
              />
              <Card.Body className={'card-text mx-4 my-4'}>
                <h4>
                  <strong>French New Wave</strong>
                </h4>
                “Tidal wave” would have been a more appropriate name for this
                explosion of vibrant, innovative, and highly self-conscious
                films by young French directors in the late 1950s and early
                1960s. The informal movement was spearheaded by a handful of
                critics from Cahiers du cinéma—Jean-Luc Godard, François
                Truffaut, Eric Rohmer, Claude Chabrol, and Jacques Rivette—whose
                incisive writings were matched by their films: bold, modern
                takes on classical masters that reworked genres like noir and
                the musical, and experimented with techniques antiquated and
                discovered. While Godard’s Breathless and Truffaut’s The 400
                Blows remain the twin groundbreaking events of the movement,
                films such as Alain Resnais’ Hiroshima mon amour and Agnès
                Varda’s Cléo from 5 to 7 were watersheds as well, finding
                excited audiences hungry for a new, energetic, political cinema
                opposed to the stuffy “cinema of quality,” as Truffaut put it,
                of the old guard. Though the movement quickly dissipated,
                filmmakers like Godard, Rivette, Varda, and Rohmer continue to
                pioneer today.
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
