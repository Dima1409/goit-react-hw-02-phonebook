import React, {Component} from "react";
import {Form, FormTitle, LabelForm, LabelInput, ButtonSubmit} from "./Form.styled";
import { nanoid } from 'nanoid';


class ContactsForm extends Component {
    state = {
        name: '',
        id: ''
      }
    onIdCreate () {
        let idAdd = nanoid(6);
        this.setState({
            id: idAdd
        })
    }
    InputChange = event => {
        const {name, value} = event.currentTarget;
        this.onIdCreate();
        this.setState({[name]: value});
    }
    SubmitForm = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            id: '',
            name: ''
        })
    }

    render() {
        return (
            <>    
<Form onSubmit={this.SubmitForm}>
    <FormTitle>Phonebook</FormTitle>
    <LabelForm>Name</LabelForm>
    <LabelInput 
  value={this.state.name}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={this.InputChange}></LabelInput>
    <ButtonSubmit type="submit">Add contact</ButtonSubmit>
</Form>
            </>

        )
    }
}

export default ContactsForm;