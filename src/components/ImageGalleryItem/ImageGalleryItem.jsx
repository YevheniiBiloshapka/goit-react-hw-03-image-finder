import { Item, ItemImage, Loader } from './ImageGalleryItem.styled';
import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import imgApi from '../services/fetchAPI';

export default class ImageGalleryItem extends Component {
   state = {
      hits: null,
      totalHits: null,
      page: 1,
      error: null,
      status: `idle`,
   };
   componentDidUpdate(prevProps, prevState) {
      const nextName = this.props.inputName;
      const prevName = prevProps.inputName;

      if (prevName !== nextName) {
         this.setState({ status: 'pending' });

         imgApi
            .fetchImages(nextName, this.state.page)
            .then(res => {
               const { hits, totalHits } = res;

               this.setState({ hits, totalHits, status: 'resolved' });
            })
            .catch(error => {
               this.setState({ error, status: 'rejected' });
            });
      }
   }

   render() {
      const { hits, error, status } = this.state;
      if (status === 'idle') {
         return;
      }

      if (status === 'pending') {
         return <Loader />;
      }

      if (status === 'rejected') {
         toast.error(`${error.message}`);
         return <ToastContainer />;
      }

      if (status === 'resolved') {
         return (
            <>
               {hits.map(({ id, tags, largeImageURL }) => (
                  <Item key={id}>
                     <ItemImage
                        src={largeImageURL}
                        alt={tags}
                        onClick={() => {
                           this.props.onClick();
                           this.props.setActiveImageIdx({
                              tags,
                              largeImageURL,
                           });
                        }}
                     />
                  </Item>
               ))}
            </>
         );
      }
   }
}
