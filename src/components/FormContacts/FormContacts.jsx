import PropTypes from 'prop-types';
import {
  ContainerForm,
  ContainerInput,
  SpanTitle,
  InputField,
  BtnAddContacts,
} from './FormContacts.styled';

export const FormContacts = ({ name, number, onSubmit, onChange }) => {
  return (
    <>
      <ContainerForm onSubmit={onSubmit}>
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
            onChange={onChange}
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
            onChange={onChange}
          />
        </ContainerInput>
        <BtnAddContacts type="submit">Add contacts</BtnAddContacts>
      </ContainerForm>
    </>
  );
};

FormContacts.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
