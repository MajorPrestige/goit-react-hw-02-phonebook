import ContactsItem from 'components/ContactsItem/ContactsItem';
import PropTypes from 'prop-types';

const ContactLists = ({ contacts, onDeleteClick }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          id={id}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </ul>
  );
};

export default ContactLists;

ContactLists.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
