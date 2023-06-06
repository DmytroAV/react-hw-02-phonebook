import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ContainerForm,
  ContainerInput,
  SpanTitle,
  InputField,
  BtnAddContacts,
} from './FormContacts.styled';

export class FormContacts extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createContact({
      name: this.state.name,
      number: this.state.number,
    });
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
      <>
        <ContainerForm onSubmit={this.handleSubmit}>
          <ContainerInput>
            <SpanTitle>Name</SpanTitle>
            <InputField
              type="text"
              name="name"
              placeholder="enter full name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </ContainerInput>
          <ContainerInput>
            <SpanTitle>Phone Number</SpanTitle>
            <InputField
              type="tel"
              name="number"
              placeholder="enter phone number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
            />
          </ContainerInput>
          <BtnAddContacts type="submit">Add contacts</BtnAddContacts>
        </ContainerForm>
      </>
    );
  }
}

FormContacts.propTypes = {
  createContact: PropTypes.func.isRequired,
};
