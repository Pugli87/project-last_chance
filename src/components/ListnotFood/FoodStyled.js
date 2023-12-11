import styled from 'styled-components';

export const Container = styled.div`
  //margin: 20px;
  padding: 20px;
  max-width: 300px;
  //margin-left: auto;
  //margin-right: 150px;

  @media (min-width: 768px) and (max-width: 1023px) {
    position: fixed;
    bottom: 0;
    left: 20%;
    transform: translateX(-50%);
    margin: 20px;
    padding: 20px;
    max-width: 300px;
  }
  @media (max-width: 767px) {
    position: fixed;
    bottom: 0;
    left: 20%;
    transform: translateX(-50%);
    margin: 20px;
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
