import { GalleryItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  return (
    <GalleryItem>
      <img src={webformatURL} alt={tags} />
      {/* <p>{tags}</p> */}
      {/* <p>id: {id}</p>
      <p>webformatURL: {webformatURL}</p>
      <p>largeImageURL: {largeImageURL}</p> */}
    </GalleryItem>
  );
};
