import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Gallery, Searchbar, ImageGallery, Button } from './App.styled';
import SearchForm from './SearchForm/SearchForm';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Modal from './Modal/Modal';

export class App extends Component {
   state = {
      name: ' ',
      showModal: false,
      activeImageIdx: null,
   };

   handleSubmit = name => {
      this.setState({ name });
   };

   toggleModal = () => {
      this.setState(({ showModal }) => ({
         showModal: !showModal,
         activeImageIdx: null,
      }));
   };

   setActiveImageIdx = ({ tags, largeImageURL }) => {
      console.log(tags, largeImageURL);
      this.setState({
         activeImageIdx: { tags, largeImageURL },
      });
   };

   render() {
      const { isLoading, name, showModal, activeImageIdx } = this.state;
      const { handleSubmit, toggleModal, setActiveImageIdx } = this;
      return (
         <Box>
            <Gallery>
               <Searchbar>
                  <SearchForm onSubmit={handleSubmit} />
               </Searchbar>
               <ImageGallery>
                  {name && (
                     <ImageGalleryItem
                        inputName={name}
                        setActiveImageIdx={setActiveImageIdx}
                        onClick={toggleModal}
                     />
                  )}
               </ImageGallery>
            </Gallery>
            <ToastContainer autoClose={2000} />

            {isLoading && <Button>Load More</Button>}

            {showModal && <Modal hits={activeImageIdx} onClose={toggleModal} />}
         </Box>
      );
   }
}
