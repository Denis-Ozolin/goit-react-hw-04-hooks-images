import { useLayoutEffect } from 'react';
import { ModalOverlay, ModalWindow } from './Modal.styled';

export function Modal({ image, closeModal }) {
  useLayoutEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        closeModal();
      }
    }

    if (!image) {
      window.removeEventListener('keydown', handleKeyDown);
      return;
    }

    window.addEventListener('keydown', handleKeyDown);
  }, [image, closeModal]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  const { largeImageURL, tags } = image;

  return (
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalWindow>
        <img src={largeImageURL} alt={tags} />
      </ModalWindow>
    </ModalOverlay>
  );
}

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = event => {
//     if (event.code === 'Escape') {
//       this.props.closeModal();
//     }
//   };

//   handleBackdropClick = event => {
//     if (event.target === event.currentTarget) {
//       this.props.closeModal();
//     }
//   };

//   render() {
//     const { largeImageURL, tags } = this.props.image;

//     return (
//       <ModalOverlay onClick={this.handleBackdropClick}>
//         <ModalWindow>
//           <img src={largeImageURL} alt={tags} />
//         </ModalWindow>
//       </ModalOverlay>
//     );
//   }
// }
