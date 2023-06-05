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
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const includesName = this.state.contacts.map(item => item.name).includes(name);
    if (includesName) {
      alert('This contact is already in your phone book');
      this.reset();
      return;
    }
    this.setState(state => ({
      contacts: [
        ...state.contacts,
        {
          id: nanoid(),
          name,
          number,
        },
      ],
    }));
    this.reset();
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  addFilterContacts = () => {
    const { filter, contacts } = this.state;
    const normFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normFilter));
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { contacts, name, number, filter } = this.state;
    const filteredContacts = this.addFilterContacts();
    return (
      <>
        <GlobalStyle />
        <div className="container">
          <Section title="Phonebook">
            <FormContacts
              name={name}
              number={number}
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
            />
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
