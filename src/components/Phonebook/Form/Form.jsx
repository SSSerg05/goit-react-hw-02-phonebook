import React, {Component} from "react";
import PropTypes from "prop-types";
import { nanoid } from 'nanoid'


export class Form extends Component {
  static defaultProps = {};

  static propTypes = {
    name: PropTypes.string,
    phone: PropTypes.string,
  };

  state = {
    name: "",
    phone: "",
  }

  // Отвечает за обновление состояния
  handleChange = e => {
    const {name, value} = e.target
    this.setState({ [name]: value });
  };

  // // Вызывается при отправке формы
  handleSubmit = e => {
    e.preventDefault();
    console.log(`Signed up as: ${this.state}`);

    // Проп который передается форме для вызова при сабмите
    this.props.onSubmit(this.state); ///{ ...this.state });
  };

  reset = () => {
    this.setState({name: "", phone: ""})
  }

  render() {
    const { name, phone } = this.state;
    const id = nanoid();

    return (
      <form onSubmit={ this.handleSubmit }>
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

        <label>
          Phone
          <input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={ phone }
            onChange={ this.handleChange }
          />
        </label>

        <button type="submit">Sign up as { name }</button>
      </form>
    )
  }
  
}