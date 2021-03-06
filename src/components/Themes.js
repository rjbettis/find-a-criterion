import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import ThemeList from '../data/theme_list.json';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

export class Themes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      themes: [],
    };
  }

  componentDidMount() {
    //Sets themes state to theme_list json object 'themes'
    this.setState({ themes: ThemeList.themes });
  }

  render() {
    return (
      <Container>
        {/* Navigation component */}
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/explore">Explore</Breadcrumb.Item>
          <Breadcrumb.Item active>Themes</Breadcrumb.Item>
        </Breadcrumb>

        {/* Theme image */}
        <Col className={'heading-style'}>
          <Image src="https://find-a-criterion.s3-us-west-1.amazonaws.com/explore-images/Themes_Font.gif" />
        </Col>

        {/* Maps through 'themes' state to display data in cards. */}
        <Row>
          {this.state.themes.map((theme) => {
            return (
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={4}
                key={theme.title + 'Col'}
              >
                <Card className={'card-style-blue-text my-3'} key={theme.title}>
                  <Card.Img
                    className={'card-style'}
                    variant="top"
                    src={/*images[theme.image]*/ theme.image}
                  />
                  <Card.Body>
                    <Card.Title className={'theme-card-title'}>
                      {/* When router link is clicked, it creates a dynamic route and passes relevant theme data to GetTheme */}

                      {theme.title}
                    </Card.Title>
                  </Card.Body>
                  <Link
                    to={{
                      pathname: `/explore/themes/${theme.link}`,
                      state: {
                        themeTitle: theme.title,
                        themeImage: theme.image,
                        themeLink: theme.link,
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

export default Themes;
