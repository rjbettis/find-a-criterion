import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export class Explore extends Component {
  state = { explore: [] };

  clickEvent(link) {
    console.log(link);
  }

  render() {
    return (
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Explore</Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card className={'explore-imgtitle-style'}>
              <Card.Img
                className={'explore-image-resize'}
                variant="top"
                src="https://find-a-criterion.s3-us-west-1.amazonaws.com/explore-images/Themes_Font.gif"
              />
            </Card>
            <Card className={'card-style my-3'}>
              <Card.Img
                className={'card-style'}
                variant="top"
                src="https://find-a-criterion.s3-us-west-1.amazonaws.com/explore-images/Themes_Image.jpg"
              />
              <Card.Body>
                <Card.Title className={'explore-card-title'}>
                  {'Explore Themes'}
                </Card.Title>
                <Card.Text className={'card-text'}>
                  Ever wonder just what is meant by "poetic realism," "New
                  German Cinema," or "neorealism"? Or how many cult movies,
                  documentaries, or Oscar winners you can find in the Criterion
                  Collection? Dig into our extensive catalog of titles by
                  category or genre to find out a little bit more about these
                  essential film movements and categories.
                </Card.Text>
              </Card.Body>
              <Link to="/explore/themes" className="stretched-link"></Link>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card className={'explore-imgtitle-style'}>
              <Card.Img
                className={'explore-image-resize'}
                variant="top"
                src="https://find-a-criterion.s3-us-west-1.amazonaws.com/explore-images/People_Font.gif"
              />
            </Card>
            <Card className={'card-style my-3'}>
              <Card.Img
                className={'card-style'}
                variant="top"
                src="https://find-a-criterion.s3-us-west-1.amazonaws.com/explore-images/People_Image.jpg"
              />
              <Card.Body>
                <Card.Title className={'explore-card-title'}>
                  {'Explore People'}
                </Card.Title>
                <Card.Text className={'card-text'}>
                  Robert Bresson, Federico Fellini, Jean-Luc Godard, Akira
                  Kurosawa, Jeanne Moreau, Ennio Morricone, François Truffaut:
                  there's no shortage of cinema superstars in the Criterion
                  Collection. Take a closer look at some of the great artists
                  who make possible the classic films in our catalog.
                </Card.Text>
              </Card.Body>
              <Link to="/explore/people" className="stretched-link"></Link>
            </Card>
          </Col>
          <Col xs={12} sm={12} md={6} lg={4} xl={4}>
            <Card className={'explore-imgtitle-style'}>
              <Card.Img
                className={'explore-image-resize'}
                variant="top"
                src="https://find-a-criterion.s3-us-west-1.amazonaws.com/explore-images/Top10_Font.gif"
              />
            </Card>
            <Card className={'card-style my-3'}>
              <Card.Img
                className={'card-style'}
                variant="top"
                src="https://find-a-criterion.s3-us-west-1.amazonaws.com/explore-images/Top10_Image.jpg"
              />
              <Card.Body>
                <Card.Title className={'explore-card-title'}>
                  {'Explore Top 10 lists'}
                </Card.Title>
                <Card.Text className={'card-text'}>
                  Every month, we ask a friend—a filmmaker, a programmer, a
                  writer, an actor, an artist—to select their ten favorite
                  movies available from the Criterion Collection and jot down
                  their thoughts about them. The entries (from people like Jane
                  Campion, Jonathan Lethem, and Sonic Youth) are often
                  surprising, and always entertaining.
                </Card.Text>
              </Card.Body>
              <Link to="/explore/top10" className="stretched-link"></Link>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Explore;
