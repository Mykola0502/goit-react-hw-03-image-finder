import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Gallery, Item } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {/* {images.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <li key={id}>
            <ImageGalleryItem
              id={id}
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
            ></ImageGalleryItem>
          </li>
        );
      })} */}
      {images.map(({ id, ...otherProps }) => {
        return (
          <Item key={id}>
            <ImageGalleryItem {...otherProps}></ImageGalleryItem>
          </Item>
        );
      })}
    </Gallery>
  );
};
