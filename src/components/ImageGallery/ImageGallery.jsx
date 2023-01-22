import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

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
        return <ImageGalleryItem key={id} {...otherProps}></ImageGalleryItem>;
      })}
    </Gallery>
  );
};
