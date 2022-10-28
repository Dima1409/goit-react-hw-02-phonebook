import React from 'react';
import { ContainerList, List, ListItem, ListTitle } from './ListContact.styled';
import PropTypes from 'prop-types';

const ListContact = ({contacts}) => {
    return (
        <ContainerList>
            <ListTitle>Contacts</ListTitle>
            <List>
                {contacts.map(({id, name})=>{
                    return <ListItem key={id}>{name}</ListItem>
                })}
            </List>
        </ContainerList>
    )
}

export default ListContact;


ListContact.propTypes = {
    contacts: PropTypes.PropTypes.arrayOf(
         PropTypes.exact({
            name: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,}))
}