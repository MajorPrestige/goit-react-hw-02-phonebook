import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ContactsForm from './ContactsForm/ContactsForm';
export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <div>
          <h2>Phonebook</h2>
          <ContactsForm onSubmit={this.formSubmitHandler} />
        </div>
        <div>
          <h2>Contacts</h2>
          <ul>
            <li></li>
          </ul>
        </div>
      </>
    );
  }
}
