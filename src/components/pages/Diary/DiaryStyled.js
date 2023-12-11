import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
  margin-bottom: 200px;
  display:flex;
  @media (min-width: 768px) and (max-width: 1023px){
    flex-direction: column;
   
  }
`;

export const Button = styled.button``;


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  @media (min-width: 768px) and (max-width: 1023px){
    flex-direction:row;
  }
`;
export const Div = styled.div` 
`;
