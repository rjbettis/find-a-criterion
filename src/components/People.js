import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import combinedJson from './Combined';

export class People extends Component {
  state = {
    films: [],
    data: combinedJson,
  };
  render() {
    return (
      <React.Fragment>
        {this.state.films.map((film) => {
          var criterionUrl = film.criterionUrl;

          return <h1>{criterionUrl}</h1>;
        })}
      </React.Fragment>
    );
  }
}

export default People;
