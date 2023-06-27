import PropTypes from 'prop-types'; // ES6'

import { List, ListItem, ItemText, ItemButton } from './ContactsList.styled';



export const ContactsList = ({ contacts, onDelete }) => { 
  return (
    <List>
      {contacts.map(({ id, name, number }) =>
        <ListItem key={id}>
          <ItemText>{name + ': ' + number}</ItemText>
          <ItemButton onClick={ () => onDelete(id) }>Delete</ItemButton>
        </ListItem>)}
      {contacts.length === 0 && <p>Sorry, you dont have more contacts</p>}
    </List>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}