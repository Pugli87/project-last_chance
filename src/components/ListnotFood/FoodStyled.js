import styled from 'styled-components';

export const Container = styled.div`
   padding: 20px;
   max-width: 300px;
 
  @media (min-width: 767px) and (max-width: 1023px) {
    
    bottom: 0;
    left: 20%;
    transform: translateX(-50%);
    padding: 20px;
    max-width: 300px;
  }
  @media (max-width: 767px) {
    bottom: 0;
    left: 20%;
    padding: 20px;
    max-width: 300px;
  }
`;

export const Textfood = styled.h2`
    font-size: 16px;
    color: #212121;
    font-family: verdana;
    margin-bottom: 10px;
`;

export const Constant = styled.span`
    font-size: 14px;
    color: #9b9faa;
    font-family: verdana;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 0;
`;
