import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

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

  findByName = name => {
    this.setState({ filter: name });
  };

  onAddContact = (name, number) => {
    const id = Math.random().toString(16).slice(2);

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { id, name, number }],
      };
    });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          marginLeft: '40px',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.onAddContact} />

        <h2>Contacts</h2>
        <Filter findByName={this.findByName} />
        <ContactList
          contacts={this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
          )}
        />
      </div>
    );
  }
}
