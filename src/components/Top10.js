import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export class Top10 extends Component {
  render() {
    return (
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/explore">Explore</Breadcrumb.Item>
          <Breadcrumb.Item active>Browse</Breadcrumb.Item>
        </Breadcrumb>
        Top 10
      </Container>
    );
  }
}

export default Top10;
