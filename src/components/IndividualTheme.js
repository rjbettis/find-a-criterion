import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Media from 'react-bootstrap/Media';
import combinedJson from './Combined';

export class IndividualTheme extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    if (this.props.currentJsonObject === 'america_america') {
      this.setState({ films: combinedJson.america_america });
    } else if (this.props.currentJsonObject === 'french_new_wave') {
      this.setState({ films: combinedJson.french_new_wave });
    }

    this.setState({
      currentTheme: this.props.currentTheme,
      currentSummary: this.props.currentSummary,
      currentImage: this.props.currentImage,
    });

    window.scrollTo(0, 0);
  }

  render() {
    const currentTheme = this.state.currentTheme;
    const currentSummary = this.state.currentSummary;
    const currentImage = this.state.currentImage;

    return (
      <React.Fragment>
        <Col className={'theme-card-style my-3'}>
          <Card className={'theme-card-style'}>
            <Media>
              <Card.Img
                width={448}
                height={230}
                className={'theme-card-style my-4 mx-1'}
                src={currentImage}
              />
              <Card.Body className={'card-text mx-4 my-4'}>
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
      </React.Fragment>
    );
  }
}

export default IndividualTheme;
