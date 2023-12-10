import React, { useState } from 'react';
import Modal from '../Modal';
import { Button } from 'components/Button/Button';
import { BoxButton } from '../../DataForm/DataForm.styled';
import { Container } from '../Modal.styled';

const ModalHome = () => {
  const [stateModal1, changestateModal1] = useState(false);

  return (
    <div>
      <BoxButton>
        <Button
          type="submit"
          text="Comienza a perder peso"
          onClick={() => changestateModal1(!stateModal1)}
        />
      </BoxButton>
      <Modal state={stateModal1} changestate={changestateModal1}>
        <Container>
          <h3> Tu ingesta diaria recomendada de calorías es: </h3>
          <Button type="submit" text="Comienza a perder peso" />
        </Container>
      </Modal>
    </div>
  );
};

export default ModalHome;
