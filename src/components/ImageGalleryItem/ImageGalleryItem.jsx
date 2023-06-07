import PropTypes from 'prop-types';
import { ImageGalleryItemImg } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ largeImageURL, webformatURL, clickHandler }) => {
  return (
    <ImageGalleryItemImg
      onClick={() => clickHandler(largeImageURL)}
      src={webformatURL}
      alt="description-info"
    />
  );
};

ImageGalleryItem.protoType = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  clickHandler: PropTypes.func,
};
export default ImageGalleryItem;
