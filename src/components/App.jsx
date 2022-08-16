import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactsForm from './ContactsForm/ContactsForm';
import ContactLists from './ContactsList/ContactList';
import ContactsSearch from './ContactsSearch/ContactsSearch';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  filterContact = e => {
    const { contacts, filter } = this.state;
    this.setState({ filter: e.target.value });
    contacts.filter(contact => {
      if (contact.name.includes(filter)) {
        this.setState({ contact: { filter } });
      }
    });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <div>
          <h2>Phonebook</h2>
          <ContactsForm onSubmit={this.formSubmitHandler} />
          <h2>Contacts</h2>
          <ContactsSearch value={filter} filter={this.filterContact} />
          <ContactLists
            contacts={contacts}
            onDeleteClick={this.deleteContact}
          />
        </div>
      </>
    );
  }
}
