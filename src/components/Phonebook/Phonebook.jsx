import React, { Component } from "react";
import PropTypes from 'prop-types'; // ES6'

export class Phonebook extends Component {
  static defaultProps = {};

  static propTypes = {
    name: PropTypes.string,
    contact: PropTypes.array,
  };
  
  state = {
    contacts: [],
    name: ''
  } 

  render() {
    return <div>Phonebook Component</div>;
  }
}