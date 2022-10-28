import {Component} from "react";
import ListContact from "components/ListContact/ListContact";
import ContactsForm from "components/Form/Form";


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  SubmitForm = data => {
    const {contacts} = this.state;
    const newListContact = [...contacts, data];
    this.setState({contacts: newListContact})
  }
  
  render() {
    return (
      <>
      <ContactsForm onSubmit={this.SubmitForm}></ContactsForm>
      <ListContact contacts={this.state.contacts}></ListContact>
      </>
      
    )
  }
};
