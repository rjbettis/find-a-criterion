import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PeopleList from '../../data/people_list.json';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

export class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [],
    };
  }

  componentDidMount() {
    this.setState({ people: PeopleList.people });
  }

  render() {
    return (
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/explore">Explore</Breadcrumb.Item>
          <Breadcrumb.Item active>People</Breadcrumb.Item>
        </Breadcrumb>

        <Col className={'heading-style'}>
          <Image src="https://d2ffltj98nrzzh.cloudfront.net/assets/explore/explore_people-a039ab3dcdfd52763be7bf6d5cae7957.gif" />
        </Col>

        <Row>
          {this.state.people.map((person) => {
            return (
              <Col xs={6} sm={5} md={4} lg={4} xl={4} key={person.name + 'Col'}>
                <Card className={'card-style my-3'} key={person.name}>
                  <Card.Img
                    className={'card-style'}
                    variant="top"
                    src={/*images[theme.image]*/ person.image}
                  />
                  <Card.Body>
                    <Card.Title className={'theme-card-title'}>
                      <Link
                        to={{
                          pathname: `/explore/people/${person.link}`,
                          state: {
                            personName: person.name,
                            personImage: person.image,
                            personLink: person.link,
                          },
                        }}
                      >
                        {person.name}
                      </Link>
                    </Card.Title>
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

export default People;
