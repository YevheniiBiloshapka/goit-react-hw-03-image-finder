import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Gallery, Searchbar, ImageGallery, Button } from './App.styled';
import SearchForm from './SearchForm/SearchForm';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { Modal } from './Modal/Modal';

export class App extends Component {
   state = {
      hits: null,
      name: ' ',
   };

   handleSubmit = name => {
      this.setState({ name });
   };

   render() {
      const { isLoading, name } = this.state;
      const { handleSubmit } = this;
      return (
         <Box>
            <Gallery>
               <Searchbar>
                  <SearchForm onSubmit={handleSubmit} />
               </Searchbar>
               <ImageGallery>
                  {name && <ImageGalleryItem inputName={name} />}
               </ImageGallery>
            </Gallery>
            <ToastContainer autoClose={2000} />
            {isLoading && <Modal />}

            {isLoading && <Button>Load More</Button>}
         </Box>
      );
   }
}
