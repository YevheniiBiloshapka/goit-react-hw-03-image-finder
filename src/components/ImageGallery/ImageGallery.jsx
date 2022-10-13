import { Item, ItemImage, ItemList } from './ImageGallery.styled';
import { Component } from 'react';

class ImageGallery extends Component {
   render() {
      const { hits } = this.props;

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
         </>
      );
   }
}

export default ImageGallery;
