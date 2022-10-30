import React from 'react';
import { List, ListItem } from './ListContact.styled';
import PropTypes from 'prop-types';

const ListContact = ({contacts}) => {
    return (
            <List>
                {contacts.map(({id, name, number})=>{
                    return <ListItem key={id}><p>{name}: {number}</p></ListItem>
                })}
            </List>
    )
}

export default ListContact;


ListContact.propTypes = {
    contacts: PropTypes.PropTypes.arrayOf(
         PropTypes.shape({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        }))
}