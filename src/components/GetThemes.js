import React, { Component } from 'react';
import ThemeList from '../data/theme_list.json';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import IndividualTheme from './IndividualTheme';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Image from 'react-bootstrap/Image';

export class GetThemes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      themes: [],
    };
  }

  componentDidMount() {
    this.setState({
      themes: ThemeList.themes,
      currentTheme: this.props.currentTheme,
    });
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

  /* using local images
  importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }
  */

  render() {
    /* using local images
    const images = this.importAll(
      require.context('../data/images', false, /\.(png|jpe?g|svg)$/)
    );
    */

    const getCards = this.state.currentTheme;

    if (getCards === 'browse') {
      return (
        <React.Fragment>
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
                  onClick={() =>
                    this.clickEvent(
                      theme.title,
                      theme.json,
                      theme.summary,
                      theme.image
                    )
                  }
                >
                  <Card className={'card-style my-3'} key={theme.title}>
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
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <Breadcrumb>
            <Breadcrumb.Item href="/Explore">Explore</Breadcrumb.Item>
            <Breadcrumb.Item href="/Themes">Themes</Breadcrumb.Item>
            <Breadcrumb.Item active>{this.state.currentTheme}</Breadcrumb.Item>
          </Breadcrumb>
          <Col className={'heading-style'}>
            <Image src="https://d2ffltj98nrzzh.cloudfront.net/assets/explore/explore_themes-013678553972c91e850a42072f55022a.gif" />
          </Col>

          <IndividualTheme
            currentTheme={this.state.currentTheme}
            currentJsonObject={this.state.currentJsonObject}
            currentSummary={this.state.currentSummary}
            currentImage={this.state.currentImage}
          />
        </React.Fragment>
      );
    }
  }
}

export default GetThemes;
