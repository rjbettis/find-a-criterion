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
    var keys = Object.keys(this.state.data);

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
    const currentPerson = this.state.currentPerson;
    const currentSummary = this.state.currentSummary;
    const currentImage = this.state.currentImage;

    return (
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/explore">Explore</Breadcrumb.Item>
          <Breadcrumb.Item href="/explore/people">People</Breadcrumb.Item>
          <Breadcrumb.Item active>{currentPerson}</Breadcrumb.Item>
        </Breadcrumb>

        <Col className={'heading-style'}>
          <Image src="https://d2ffltj98nrzzh.cloudfront.net/assets/explore/explore_people-a039ab3dcdfd52763be7bf6d5cae7957.gif" />
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
                    <strong>{currentPerson}</strong>
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
            return (
              <Col lg={4} key={film.title + 'Col'}>
                <Card className={'card-style my-3'} key={film.title}>
                  <Card.Img variant="top" src={film.image} />
                  <Card.Body>
                    <Card.Title className={'movie-title'}>
                      <a href={criterionUrl}>{film.title}</a>
                    </Card.Title>
                    <Card.Text className={'movie-director'}>
                      {film.year}
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

export default GetPerson;
