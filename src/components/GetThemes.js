import React, { Component } from 'react';
import ThemeList from '../data/theme_list.json';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import imagetest from '../data/images/AmericaAmerica.jpg';

export class GetThemes extends Component {
  state = {
    themes: [],
  };

  componentDidMount() {
    this.setState({ themes: ThemeList.themes });
  }

  clickEvent(link) {
    console.log(link);

    window.open('/' + link, '_self');
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

    return (
      <Row>
        {this.state.themes.map((theme) => {
          return (
            <Col xs={6} sm={5} md={4} lg={4} xl={4} key={theme.title + 'Col'}>
              <Card
                className={'card-style my-3'}
                key={theme.title}
                onClick={() => this.clickEvent(theme.link)}
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
    );
  }
}

export default GetThemes;
