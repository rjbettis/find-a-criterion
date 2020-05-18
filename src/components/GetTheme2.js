import React, { Component } from 'react';

export default ({
  match: {
    params: { id },
  },
}) => <h1>{id}</h1>;
