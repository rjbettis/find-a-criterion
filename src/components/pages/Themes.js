import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import ThemeList from '../../data/theme_list.json';
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
    this.setState({ themes: ThemeList.themes });
  }

  render() {
    return (
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/Explore">Explore</Breadcrumb.Item>
          <Breadcrumb.Item active>Themes</Breadcrumb.Item>
        </Breadcrumb>

        <Col className={'heading-style'}>
          <Image src="https://d2ffltj98nrzzh.cloudfront.net/assets/explore/explore_themes-013678553972c91e850a42072f55022a.gif" />
        </Col>

        <Row>
          {this.state.themes.map((theme) => {
            return (
              <Col xs={6} sm={5} md={4} lg={4} xl={4} key={theme.title + 'Col'}>
                <Card className={'card-style my-3'} key={theme.title}>
                  <Card.Img
                    className={'card-style'}
                    variant="top"
                    src={/*images[theme.image]*/ theme.image}
                  />
                  <Card.Body>
                    <Card.Title className={'theme-card-title'}>
                      <Link
                        to={{
                          pathname: `/explore/themes/${theme.link}`,
                          state: {
                            themeTitle: theme.title,
                            themeImage: theme.image,
                            themeLink: theme.link,
                          },
                        }}
                      >
                        {theme.title}
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

export default Themes;
