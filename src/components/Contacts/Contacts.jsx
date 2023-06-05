import PropTypes from 'prop-types';
import { ContainerContacts, InputFilterContacts, ListContact } from './Contacts.styled';

export const Contacts = ({ items, value, onChange }) => {
  return (
    <ContainerContacts>
      <InputFilterContacts name="filter" value={value} onChange={onChange} />
      {items.map(item => (
        <ListContact key={item.id}>
          {item.name}: {item.number}
        </ListContact>
      ))}
    </ContainerContacts>
  );
};

Contacts.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
