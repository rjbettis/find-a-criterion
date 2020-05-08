import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import GetThemes from '../GetThemes';
import Col from 'react-bootstrap/Col';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Image from 'react-bootstrap/Image';

export class Themes extends Component {
  state = { themes: [] };

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

        <GetThemes />
      </Container>
    );
  }
}

export default Themes;
