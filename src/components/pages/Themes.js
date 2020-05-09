import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import ThemeList from '../../data/theme_list.json';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GetTheme from '../GetTheme';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Image from 'react-bootstrap/Image';

export class Themes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      themes: [],
      currentTheme: 'browse',
    };
  }

  componentDidMount() {
    this.setState({ themes: ThemeList.themes });
  }

  clickEvent(title, json, summary, image) {
    this.setState({
      currentTheme: title,
      currentJsonObject: json,
      films: ThemeList.themes,
      currentSummary: summary,
      currentImage: image,
    });
  }

  render() {
    const getCards = this.state.currentTheme;

    if (getCards === 'browse') {
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
                <Col
                  xs={6}
                  sm={5}
                  md={4}
                  lg={4}
                  xl={4}
                  key={theme.title + 'Col'}
                >
                  <Card
                    className={'card-style my-3'}
                    key={theme.title}
                    onClick={() =>
                      this.clickEvent(
                        theme.title,
                        theme.json,
                        theme.summary,
                        theme.image
                      )
                    }
                  >
                    <Card.Img
                      className={'card-style'}
                      variant="top"
                      src={/*images[theme.image]*/ theme.image}
                    />
                    <Card.Body>
                      <Card.Title className={'card-title'}>
                        {theme.title}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      );
    } else {
      return (
        <Container>
          <Breadcrumb>
            <Breadcrumb.Item href="/Explore">Explore</Breadcrumb.Item>
            <Breadcrumb.Item href="/Themes">Themes</Breadcrumb.Item>
            <Breadcrumb.Item active>{this.state.currentTheme}</Breadcrumb.Item>
          </Breadcrumb>
          <Col className={'heading-style'}>
            <Image src="https://d2ffltj98nrzzh.cloudfront.net/assets/explore/explore_themes-013678553972c91e850a42072f55022a.gif" />
          </Col>

          <GetTheme
            currentTheme={this.state.currentTheme}
            currentJsonObject={this.state.currentJsonObject}
            currentSummary={this.state.currentSummary}
            currentImage={this.state.currentImage}
          />
        </Container>
      );
    }
  }
}

export default Themes;
