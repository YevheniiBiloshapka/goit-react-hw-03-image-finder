import {
   Item,
   ItemImage,
   Loader,
   Button,
   ItemList,
} from './ImageGallery.styled';
import { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import imgApi from '../services/fetchAPI';

export default class ImageGallery extends Component {
   state = {
      hits: [],
      totalHits: null,
      page: 1,
      per_page: 12,
      error: null,
      status: `idle`,
   };
   componentDidUpdate(prevProps, prevState) {
      const nextName = this.props.inputName;
      const prevName = prevProps.inputName;
      const nextPage = this.state.page;
      const prevPage = prevState.page;

      if (prevName !== nextName || prevPage !== nextPage) {
         this.setState({ status: 'pending' });

         imgApi
            .fetchImages(nextName, nextPage, this.state.per_page)
            .then(res => {
               const { hits, totalHits } = res;

               this.setState(prevState => ({
                  hits: [...prevState.hits, ...hits],
                  totalHits,
                  status: 'resolved',
               }));
            })
            .catch(error => {
               this.setState({ error, status: 'rejected' });
            });
      }
   }

   onLoadMore = () => {
      this.setState(prevState => ({ page: prevState.page + 1 }));
   };

   render() {
      const { hits, error, status, totalHits, page, per_page } = this.state;
      console.log(totalHits);
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
               <ItemList>
                  {hits.map(({ id, tags, webformatURL, largeImageURL }) => (
                     <Item key={id}>
                        <ItemImage
                           src={webformatURL}
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
               </ItemList>
               {totalHits - (page - 1) * per_page > per_page && (
                  <Button onClick={this.onLoadMore}>Load More</Button>
               )}
            </>
         );
      }
   }
}
