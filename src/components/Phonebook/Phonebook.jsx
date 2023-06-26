// library
import React, { Component } from "react";
import PropTypes from 'prop-types'; // ES6'
import { nanoid } from "nanoid";

// components
import { Section } from "../Section/Section";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { Form } from "./Form/Form";

// data
import contactsInitial from "../../data/contactsInitial.json";

// style
import { DeskPhonebook } from "./Phonebook.styled";


export class Phonebook extends Component {
  static defaultProps = {
    filter: '',
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
      })
    ),
    filter: PropTypes.string,
  };
  
  state = {
    contacts: contactsInitial,
    filter: '',
  } 

  createId = () => { return nanoid(); }

  onSubmitForm = ({ ...data }) => {
    const newContact = { id: this.createId(), name: data.name, phone: data.phone };
    
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }))
  }

  // Filter
  onChangeFilter = e => { 
    this.setState({ filter: e.currentTarget.value });
  }

  getVisibleContacts = () => { 
    const { contacts, filter } = this.state;

    const nomaliseFilter = filter.toLocaleLowerCase();
    return contacts.filter(
      item => item.name.toLocaleLowerCase().includes(nomaliseFilter));
  }

  // delete item without ContactsList
  onDeleteItem = (id) => { 
    this.setState(({ contacts })  => ({
      contacts: contacts.filter(item => item.id !== id),
    }))
  }


  render() {
    const { filter } = this.state;
    const outFilter = this.getVisibleContacts();

    return (
      <Section>
        Phonebook Component
        <DeskPhonebook>
          <Form onSubmit={ this.onSubmitForm }></Form>
          
        </DeskPhonebook>
        
        <Section>
          <Filter
              value = { filter }
              onFilter={this.onChangeFilter}>
          </Filter>
        </Section>
        
        <Section title={"Contacts"}>
          <ContactsList
            contacts={ outFilter }
            onDelete={ this.onDeleteItem }/>
        </Section>
      
      </Section>
    );
  }
}