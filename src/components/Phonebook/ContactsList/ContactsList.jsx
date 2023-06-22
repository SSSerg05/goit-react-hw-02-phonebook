import PropTypes from 'prop-types'; // ES6'
import { List } from './ContactsList.styled';


export const ContactsList = ({ contacts }) => { 
  return (
    <List>
      {contacts.map(({ id, name, phone }) =>
        <li key={ id }>{ name + ' | ' + phone }</li>)}
    </List>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    }).isRequired
  ).isRequired,
}