import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Name } from './ContactForm/ContactForm.styled';
import { NameItem } from './ContactForm/ContactForm.styled';

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

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  onAddContact = (name, number) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

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
        <Name>Phonebook</Name>
        <ContactForm onSubmitForm={this.onAddContact} />

        <NameItem>Contacts</NameItem>
        <Filter findByName={this.findByName} />
        <ContactList
          contacts={this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
          )}
          onDeleteItem={this.deleteContact}
        />
      </div>
    );
  }
}
