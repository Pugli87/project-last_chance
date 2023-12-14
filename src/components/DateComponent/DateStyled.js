import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  max-width: 300px;


  @media (min-width: 767px) and (max-width: 1023px) {
  bottom: 0;
  }
  @media (max-width: 767px) {
  }
`;
  export const ContainerLi  = styled.div`
  display: flex; 
  justify-content: space-between;
  padding-top: 16px;
`;

export const Title = styled.h2`
  font-size: 16px;
  color: #212121;
  font-family: verdana;
  margin-bottom: 10px;
`;

export const SubtitleDate = styled.span`
  font-size: 14px;
  color: #9b9faa;
  font-family: verdana;
  margin-bottom: 10px;
`;

export const CaloricValue = styled.span`
  font-size: 14px;
  color: #9b9faa;
  font-family: verdana;
  margin-left: auto;
`;
