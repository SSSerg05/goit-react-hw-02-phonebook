import React, { Component } from "react";
import PropTypes from 'prop-types'; // ES6'
import { Section } from "../Section/Section";

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
    return (
      <Section>
        Phonebook Component

        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

      </Section>
    );
  }
}