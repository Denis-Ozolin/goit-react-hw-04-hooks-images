import { useState, useEffect } from 'react';
import { getImages } from '../../services/apiSettings';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Spinner } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { WrongData } from 'components/WrongData/WrongData';
import { StyledApp } from './App.styled';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [cardSet, setCardSet] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function onScrollPage(page) {
      if (page > 1) {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }
    }

    function fetchImages(query, page) {
      if (query === '') return;

      setLoading(true);

      getImages(query, page)
        .then(res => {
          setCardSet(state => [...state, ...res.hits]);
          onScrollPage(page);
        })
        .finally(() => setLoading(false));
    }

    fetchImages(searchQuery, currentPage);
  }, [searchQuery, currentPage]);

  const onSubmit = data => {
    if (data === searchQuery) return;

    setCardSet([]);
    setSearchQuery(data);
    setCurrentPage(1);
  };

  const onloadMore = () => {
    setCurrentPage(state => state + 1);
  };

  const onCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <StyledApp>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery>
        <ImageGalleryItem items={cardSet} onClick={setSelectedImage} />
      </ImageGallery>
      {loading && <Spinner />}
      {currentPage === 1 && cardSet.length === 0 && !loading && (
        <WrongData message="No images for this request." />
      )}
      {cardSet.length > 0 && <Button onClick={onloadMore} />}
      {selectedImage && <Modal image={selectedImage} closeModal={onCloseModal} />}
    </StyledApp>
  );
}
