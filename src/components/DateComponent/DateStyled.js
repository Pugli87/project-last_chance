import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  @media  (max-width: 1023px) {
    position: fixed;
    bottom: 0;
    left: 0;
   
  }

`;
  export const ContainerLi  = styled.div`
  display: flex; 
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 16px;
  color: #212121;
  font-family: verdana;
  margin-bottom: 20px;
`;

export const SubtitleDate = styled.span`
  font-size: 14px;
  color: #9b9faa;
  font-family: verdana;
  margin-bottom: 10px;
  padding-top: 10px;
`;

export const CaloricValue = styled.span`
  font-size: 14px;
  color: #9b9faa;
  font-family: verdana;
  margin-left: auto;
  padding-top: 10px;
`;
