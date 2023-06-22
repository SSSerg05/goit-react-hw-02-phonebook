import React, { Component } from "react";
import PropTypes from 'prop-types'; // ES6'
import { nanoid } from 'nanoid'

import { Section } from "../Section/Section";
import { DeskPhonebook, Button } from "./Phonebook.styled";

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

  // Отвечает за обновление состояния
  handleChange = e => {
    this.setState({ name: e.target.value });
  };

  // // Вызывается при отправке формы
  // handleSubmit = evt => {
  //   evt.preventDefault();
  //   console.log(`Signed up as: ${this.state.name}`);

  //   // Проп который передается форме для вызова при сабмите
  //   this.props.onSubmit({ ...this.state });
  // };



  render() {
    const { name, contacts } = this.state;
    const id = nanoid();

    return (
      <Section>
        Phonebook Component
        <DeskPhonebook>
          <form onSubmit={() => this.handleSubmit({id, name})}>
            <label>
              Name

              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={ name }
                onChange={ this.handleChange }
              />
            </label>

            {/* <Button as="submit">Add contact {name}</Button> */}
             <button type="submit">Sign up as {name}</button>
          </form>
          
        </DeskPhonebook>
        <div>
          {
            console.log(this.state.contacts)
            // this.state.contacts.map(item => 
            //   <p>{item.id + ' | ' + item.name}</p>
            // )
          }
        </div>

      </Section>
    );
  }
}