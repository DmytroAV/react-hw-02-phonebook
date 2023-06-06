import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Message } from './Message/Message';
import { FormContacts } from './FormContacts/FormContacts';
import { Contacts } from './Contacts/Contacts';
import { Section } from './Section/Section';
import { GlobalStyle } from './GlobalStyle';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createContact = data => {
    const { contacts } = this.state;
    const newContact = {
      ...data,
      id: nanoid(),
    };

    const checkName = contacts.some(({ name }) => name === data.name);
    if (checkName) {
      alert(`${data.name} is already in your phonebook`);
      return;
    }
    this.setState(state => ({
      contacts: [...state.contacts, newContact],
    }));
  };

  handleFilterChange = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  addFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normalFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => name.toLowerCase().includes(normalFilter));
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.addFilterContacts();
    return (
      <>
        <GlobalStyle />
        <div className="container">
          <Section title="Phonebook">
            <FormContacts createContact={this.createContact} />
          </Section>
          <Section title="Contacts">
            {contacts.length !== 0 ? (
              <Contacts
                items={filteredContacts}
                onChange={this.handleFilterChange}
                value={filter}
              />
            ) : (
              <Message message="There are no contacts in your phonebook. Please add your first contact!" />
            )}
          </Section>
        </div>
      </>
    );
  }
}

export default App;
