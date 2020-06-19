import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import combinedJson from './CombinedPeople';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Image from 'react-bootstrap/Image';
import PeopleList from '../data/people_list.json';

export class GetPerson extends Component {
  state = {
    films: [],
    data: combinedJson,
  };

  componentDidMount() {
    // Creates an array of keys from the json files in CombinedPeople.js
    var keys = Object.keys(this.state.data);

    /* 
    Checks the dynamic react router param from the URL against the keys array. If it matches one of the keys 
    then the required data to render the page (currentPerson, currentSummary, currentImage) are set to states.
    An array of films that match the key are set to the 'films' state.
    */
    var i;
    for (i in keys) {
      console.log(this.props.match.params.person + ' = ' + keys[i]);
      if (this.props.match.params.person === keys[i]) {
        this.setState({
          films: combinedJson[keys[i]],
          currentPerson: PeopleList.people[i].name,
          currentSummary: PeopleList.people[i].summary,
          currentImage: PeopleList.people[i].image,
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
          <Breadcrumb.Item href="/explore/people">People</Breadcrumb.Item>
          <Breadcrumb.Item active>{this.state.currentPerson}</Breadcrumb.Item>
        </Breadcrumb>

        {/* Theme image */}
        <Col className={'heading-style'}>
          <Image src="https://d2ffltj98nrzzh.cloudfront.net/assets/explore/explore_people-a039ab3dcdfd52763be7bf6d5cae7957.gif" />
        </Col>

        {/* Displays person image, name and summary in a card */}
        <Col lg={12}>
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
                <Card.Body className={'movie-card-text '}>
                  <h4>
                    <strong>{this.state.currentPerson}</strong>
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
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={4}
                key={film.title + 'Col'}
              >
                <Card className={'card-style-blue-text my-3'} key={index}>
                  <Card.Img variant="top" src={film.image} />
                  <Card.Body>
                    <Card.Title className={'movie-title'}>
                      {film.title}
                    </Card.Title>
                    <Card.Text className={'movie-director'}>
                      {film.year}
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

export default GetPerson;
