import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ items, onClick }) => {
  return items.map(item => (
    <GalleryItem key={item.id} onClick={() => onClick(item)}>
      <GalleryItemImg src={item.webformatURL} alt={item.tags} />
    </GalleryItem>
  ));
};
