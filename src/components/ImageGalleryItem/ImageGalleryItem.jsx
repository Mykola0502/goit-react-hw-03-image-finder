import { Component } from 'react';

import { Modal } from 'components/Modal';

import { ItemImg } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, largeImageURL, tags } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <ItemImg src={webformatURL} alt={tags} onClick={this.toggleModal} />
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
        {/* <p>{tags}</p> */}
        {/* <p>id: {id}</p>
      <p>webformatURL: {webformatURL}</p>
      <p>largeImageURL: {largeImageURL}</p> */}
      </>
    );
  }
}

// export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
//   return (
//     <GalleryItem>
//       <img src={webformatURL} alt={tags} />
//       {/* <p>{tags}</p> */}
//       {/* <p>id: {id}</p>
//       <p>webformatURL: {webformatURL}</p>
//       <p>largeImageURL: {largeImageURL}</p> */}

//       <Modal largeImageURL={largeImageURL} tags={tags} />
//     </GalleryItem>
//   );
// };
