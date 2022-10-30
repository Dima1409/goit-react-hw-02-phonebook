import {Component} from "react";
import ListContact from "components/ListContact/ListContact";
import SearchInput from "components/SearchInput/SearchInput";
import ContactsForm from "components/Form/Form";
import { ContainerList, ListTitle, FormTitle } from "./App.styled";

const BASE_STATE = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
}
export class App extends Component {
  state = {...BASE_STATE}
  
  onChangeFilter = event => {
    this.setState({filter: event.currentTarget.value})
  }

  getSortByFilter = () => {
    const normalizedValue = this.state.filter.toLowerCase();
    return this.state.contacts.filter(elem=>elem.name.toLowerCase().includes(normalizedValue))
  }

  SubmitForm = data => {
    const {contacts} = this.state;
    contacts.forEach(elem => {
      if(elem.name.toLowerCase()===data.name.toLowerCase()) {
        alert(`${data.name} is already in contacts`)
        const newListContact = [...contacts];
        return this.setState({contacts: newListContact})
      }
      const newListContact = [...contacts, data];
      return this.setState({contacts: newListContact})
    })
  }
  
  render() {
    const {filter} = this.state;
    const sortByName = this.getSortByFilter();
    const onChange = this.onChangeFilter;
    return (
      <>
      <FormTitle as='h1'>Phonebook</FormTitle>
      <ContactsForm onSubmit={this.SubmitForm}></ContactsForm>
      <ContainerList>
      <ListTitle as='h2'>Contacts</ListTitle>
      <SearchInput value={filter} onChangeFilter={onChange}></SearchInput>
      <ListContact contacts={sortByName}></ListContact>
      </ContainerList>
      </>
    )
  }
};
