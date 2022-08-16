import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputNameId = nanoid();
  inputNumberId = nanoid();

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <label htmlFor={this.inputNameId}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.onInputChange}
            id={this.inputNameId}
          />
        </label>

        <label htmlFor={this.inputNumberId}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={this.onInputChange}
            id={this.inputNumberId}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactsForm;
