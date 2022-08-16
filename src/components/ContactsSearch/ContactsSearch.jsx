import PropTypes from 'prop-types';

const ContactsSearch = ({ filter, value }) => {
  return (
    <label>
      Find contacts by name
      <input onChange={filter} value={value} type="text" />
    </label>
  );
};

export default ContactsSearch;

ContactsSearch.propTypes = {
  filter: PropTypes.func,
  value: PropTypes.string,
};
