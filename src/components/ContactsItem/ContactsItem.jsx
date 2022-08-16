import PropTypes from 'prop-types';

const ContactsItem = ({
  name,
  number,
  id,
  onDeleteClick,
  onCheckboxChange,
}) => {
  return (
    <li>
      <label>
        <input type="checkbox" name={id} onChange={onCheckboxChange} />
      </label>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDeleteClick(id)} type="button">
        Delete
      </button>
    </li>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteClick: PropTypes.func,
};
