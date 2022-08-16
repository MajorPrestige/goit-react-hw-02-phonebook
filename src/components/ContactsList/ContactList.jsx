import ContactsItem from 'components/ContactsItem/ContactsItem';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactLists = ({
  contacts,
  onDeleteClick,
  onCheckboxChange,
  deleteAllContact,
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
      <button onClick={deleteAllContact} type="button">
        Delete checked
      </button>
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
