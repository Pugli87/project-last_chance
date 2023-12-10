 import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  max-width: 300px; 
  margin-left: auto; 
  margin-right: 150px; 
  margin-top: -450px; 
 
 @media (min-width: 767px) and (max-width: 1023px)  {
  position: fixed;
  bottom: 20px;
  left: 0;
  padding: 10px;
  max-width: 300px;
  
  }
  @media  (max-width: 767px) {
    position: fixed;
    bottom: 0px;
    margin: 20px;
    padding: 20px;
    max-width: 300px;
   }
`; 


export const Title = styled.h2`
  font-size: 16px;
  color: #212121;
  font-family: verdana;
  margin-bottom: 20px;
`;

export const SubtitleDate = styled.span`
  font-size: 14px;
  color: #9B9FAA;
  font-family: verdana;
  margin-bottom: 10px;

`;

export const CaloricValue = styled.span`
  font-size: 14px;
  color: #9B9FAA;
  font-family: verdana;
  margin-left: auto;
   
`; 
 export const SubtitleContainer = styled.div`
 display: flex;
 align-items: center;
 margin-bottom: 5px; 
 margin-top: 10px;
`;
