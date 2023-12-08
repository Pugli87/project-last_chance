import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Button/Button';
import { Content, CloseModalButton } from '../Modal.styled';

export const ModalContent = ({ handleClose }) => {
  const navigate = useNavigate();

  return (
    <>
      <Content>
        <Button
          autoFocus
          text="Comienza a perder peso"
          onClick={() => navigate('/signup')}
        ></Button>
      </Content>
      <CloseModalButton aria-label="Close modal" onClick={handleClose} />
    </>
  );
};
