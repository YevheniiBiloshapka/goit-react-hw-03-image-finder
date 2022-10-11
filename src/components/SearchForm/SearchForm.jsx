import { Form, FormButton, Input } from './SearchForm.styled';
import { VscSearch } from 'react-icons/vsc';
export const SearchForm = () => {
  return (
    <Form>
      <FormButton type="submit">
        <VscSearch />
      </FormButton>

      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </Form>
  );
};
