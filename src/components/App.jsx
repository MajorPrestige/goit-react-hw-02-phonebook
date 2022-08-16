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
    contactsToDelete: [],
  };

  formSubmitHandler = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => {
      const duplicateContact = contacts.find(
        contact => contact.name === newContact.name
      );

      if (duplicateContact?.name === newContact.name) {
        return alert(`${newContact.name} is already in contacts`);
      }

      return { contacts: [newContact, ...contacts] };
    });
  };

  onCheckboxChange = e => {
    const contactId = e.target.name;
    if (this.state.contactsToDelete.includes(contactId)) {
      this.setState(prevState => {
        return {
          contactsToDelete: [
            ...prevState.contactsToDelete.filter(el => el !== contactId),
          ],
        };
      });
    } else {
      this.setState(prevState => {
        return {
          contactsToDelete: [...prevState.contactsToDelete, e.target.name],
        };
      });
    }
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  deleteAllContact = () => {
    const { contactsToDelete } = this.state;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => !contactsToDelete.includes(contact.id)
      ),
    }));
  };

  filterContact = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    const filterNormalized = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterNormalized)
    );

    return (
      <>
        <div>
          <h2>Phonebook</h2>
          <ContactsForm onSubmit={this.formSubmitHandler} />
          <h2>Contacts</h2>
          <ContactsSearch value={filter} filter={this.filterContact} />
          <ContactLists
            contacts={filterContacts}
            onDeleteClick={this.deleteContact}
            onCheckboxChange={this.onCheckboxChange}
            deleteAllContact={this.deleteAllContact}
          />
        </div>
      </>
    );
  }
}
