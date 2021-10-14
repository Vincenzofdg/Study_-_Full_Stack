/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export class Solution extends Component {
  render() {
    // this.props.match.params.id
    const { match: { params: { id } } } = this.props;
    return (
      <div>
        Olá eu sou a solution
        {' '}
        { id }
      </div>
    );
  }
}

export default Solution;
