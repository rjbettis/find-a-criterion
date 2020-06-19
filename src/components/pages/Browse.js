import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export class Browse extends Component {
  state = { Browse: [] };

  render() {
    return (
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Browse</Breadcrumb.Item>
        </Breadcrumb>
        Not yet implemented.
      </Container>
    );
  }
}

export default Browse;
