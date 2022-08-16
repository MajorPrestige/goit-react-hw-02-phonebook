import ContactsItem from 'components/ContactsItem/ContactsItem';
import PropTypes, { string } from 'prop-types';
import s from './ContactList.module.css';

const ContactLists = ({
  contacts,
  onDeleteClick,
  onCheckboxChange,
  deleteAllContact,
  contactsToDelete,
}) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ name, number, id }) => (
        <ContactsItem
          key={id}
          name={name}
          number={number}
          id={id}
          onDeleteClick={onDeleteClick}
          onCheckboxChange={onCheckboxChange}
        />
      ))}
      {contactsToDelete && (
        <button className={s.btn} onClick={deleteAllContact} type="button">
          Delete checked
        </button>
      )}
    </ul>
  );
};

export default ContactLists;

ContactLists.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
