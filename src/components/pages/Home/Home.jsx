import React from 'react';
import Calculator from '../Calculator/Calculator';
import ModalHome from 'components/Modal/ModalContent/ModalContent';

function Home() {
  return (
    <div>
      <Calculator />
      <ModalHome />
    </div>
  );
}

export default Home;
