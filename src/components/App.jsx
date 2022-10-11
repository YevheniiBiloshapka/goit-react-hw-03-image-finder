import { Component } from 'react';
import {
  Box,
  Gallery,
  Searchbar,
  ImageGallery,
  Button,
  Loader,
} from './App.styled';
import { SearchForm } from './SearchForm/SearchForm';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    isShown: false,
  };
  render() {
    return (
      <Box>
        <Gallery>
          <Searchbar>
            <SearchForm />
          </Searchbar>
          <ImageGallery>
            <ImageGalleryItem />
            <ImageGalleryItem />
            <ImageGalleryItem />
          </ImageGallery>
        </Gallery>
        {this.state.isShown && <Modal />}
        {this.state.isShown && <Loader />}
        {this.state.isShown && <Button />}
        <Loader />
        <Button>Load More</Button>
      </Box>
    );
  }
}
