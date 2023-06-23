// library
import React, { Component } from "react";
import PropTypes from 'prop-types'; // ES6'
import { nanoid } from "nanoid";

// components
import { Section } from "../Section/Section";
import { ContactsList } from "./ContactsList/ContactsList";
import { Form } from "./Form/Form";

// data
import contactsInitial from "../../data/contactsInitial.json";

// style
import { DeskPhonebook } from "./Phonebook.styled";


export class Phonebook extends Component {
  static defaultProps = {};

  static propTypes = {
    name: PropTypes.string,
    contact: PropTypes.array,
    phone: PropTypes.string,
  };
  
  state = {
    contacts: contactsInitial,
    name: '',
    phone: '',
  } 

  createId = () => { return nanoid(); }

  onSubmitForm = ({ ...data }) => {
    const contact = { id: this.createId(), name: data.name, phone: data.phone };
    
    this.setState(({ contacts }) => ({
      name: data.name,
      phone: data.phone,
      contacts: [contact, ...contacts],
    }))
  }


  // delete item without ContactsList
  onDeleteItem = (id) => { 
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }))

  }


  render() {
    const { contacts } = this.state;

    return (
      <Section>
        Phonebook Component
        <DeskPhonebook>
          <Form onSubmit={ this.onSubmitForm }></Form>
          
        </DeskPhonebook>
        
        <Section title={"Contacts"}>
          <ContactsList
            contacts={ contacts }
            onDelete={ this.onDeleteItem }/>
        </Section>
      
      </Section>
    );
  }
}