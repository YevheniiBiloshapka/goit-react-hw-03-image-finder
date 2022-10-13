import { Component } from 'react';
import { Form, FormButton, Input } from './SearchForm.styled';
import { VscSearch } from 'react-icons/vsc';
import { toast } from 'react-toastify';

class SearchForm extends Component {
   state = {
      name: '',
   };

   handleNameChange = event => {
      this.setState({
         name: event.currentTarget.value.toLowerCase(),
      });
   };

   handleSubmit = event => {
      event.preventDefault();
      const form = event.currentTarget;

      if (this.state.name.trim() === '') {
         toast.warn('Please enter name', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
         });
         return;
      }
      this.props.onSubmit(this.state.name);
      form.reset();
      this.setState({ name: '' });
   };

   render() {
      return (
         <Form onSubmit={this.handleSubmit}>
            <FormButton type="submit">
               <VscSearch />
            </FormButton>

            <Input
               name="name"
               type="text"
               autoComplete="off"
               autoFocus
               value={this.state.name}
               placeholder="Search images and photos"
               onChange={this.handleNameChange}
            />
         </Form>
      );
   }
}

export default SearchForm;
