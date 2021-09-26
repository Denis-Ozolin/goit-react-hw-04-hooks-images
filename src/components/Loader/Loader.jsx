import Loader from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Spinner = () => {
  return (
    <LoaderContainer>
      <Loader
        type="ThreeDots"
        color="#faf613"
        height={80}
        width={80}
        // timeout={3000}
      />
    </LoaderContainer>
  );
};
