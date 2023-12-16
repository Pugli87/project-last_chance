import styled from 'styled-components';

export const Container = styled.div`
  //margin-top: 60px;
  max-width: 300px;
  margin-top: 40px;
  @media (max-width: 1024px) {
    margin-top: 0;
  }
  @media (max-width: 768px) {
    margin-top: 40px;
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
