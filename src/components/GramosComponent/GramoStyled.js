import styled from 'styled-components';
export const GramosList = styled.ul`
  list-style-type: none;
  padding: 0;
`;
// Estilos para cada elemento "100g"
export const GramosItem = styled.li`
  
font-size: 16px;
  color : #9B9FAA;
  margin-bottom: 5px;
  font-family : verdana;
  padding-top : 30px;
`;
// Estilos para el texto "Gramos"
export const GramosText = styled.p`
font-size: 18px;
margin-bottom: 10px;
color : #9B9FAA;
font-family : verdana;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  height: 100vh;
  margin-top: -320px;
  margin-left: -200px
`;
