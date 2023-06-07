import { useState } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import { ImageGalleryUl, ImageGalleryItemLi } from './ImageGallery.styled';
import Modal from '../Modal';

const ImageGallery = ({ hits }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPicture, setSelectedPicture] = useState(null);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const selectPicture = link => {
    setSelectedPicture(link);
    toggleModal();
  };
  return (
    <>
      <ImageGalleryUl>
        {hits.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItemLi key={id}>
            <ImageGalleryItem
              webformatURL={webformatURL}
              largeImageURL={largeImageURL}
              clickHandler={selectPicture}
            />
          </ImageGalleryItemLi>
        ))}
      </ImageGalleryUl>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={selectedPicture} alt={'pic preview'} />
        </Modal>
      )}
    </>
  );
};

ImageGallery.protoType = {
  searchQuery: PropTypes.string,
};
export default ImageGallery;
