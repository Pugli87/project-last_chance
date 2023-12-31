import styled from 'styled-components';

export const Btn = styled.button`
  box-shadow: 0px 4px 10px 0px #fc842d80;
  background-color: #fc842d;
  color: #fff;
  padding: 10px 15px;
  font-family: Verdana;
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  letter-spacing: 0.04em;
  text-align: right;
  font-size: 1em;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  //margin: 30px -0px;

  &:hover {
    background-color: #fc842d80;
  }
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const BoxButton = styled.div`
  margin: auto;
  margin-top: 10px;
  text-align: right;
  @media (max-width: 767px) {
    margin: 10px;
  }
`;
