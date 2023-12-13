import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 300px;
  @media (max-width: 1023px) {
    //position: fixed;
    bottom: 0;
    right: 0;

    margin-right: 100px;
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
