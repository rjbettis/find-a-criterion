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
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/explore">Explore</Breadcrumb.Item>
          <Breadcrumb.Item active>People</Breadcrumb.Item>
        </Breadcrumb>

        <Col className={'heading-style'}>
          <Image src="https://find-a-criterion.s3-us-west-1.amazonaws.com/explore-images/People_Font.gif" />
        </Col>

        <Row>
          {this.state.people.map((person) => {
            return (
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={6}
                xl={4}
                key={person.name + 'Col'}
              >
                <Card className={'card-style-blue-text my-3'} key={person.name}>
                  <Card.Img
                    className={'card-style'}
                    variant="top"
                    src={/*images[theme.image]*/ person.image}
                  />
                  <Card.Body>
                    <Card.Title className={'theme-card-title'}>
                      {person.name}
                    </Card.Title>
                    <Card.Text className={'card-text'}>{person.job}</Card.Text>
                  </Card.Body>
                  <Link
                    to={{
                      pathname: `/explore/people/${person.link}`,
                      state: {
                        personName: person.name,
                        personImage: person.image,
                        personLink: person.link,
                      },
                    }}
                    className="stretched-link"
                  ></Link>
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
