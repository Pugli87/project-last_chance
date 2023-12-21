import styled from 'styled-components';

export const Container = styled.div`
  //margin-top: 60px;
  max-width: 300px;
  margin-top: 40px;

  @media (max-width: 1023px) {
    margin-top: 0;
  }

  @media (max-width: 767px) {
    margin-top: 40px;
  }
`;

export const Textfood = styled.h2`
  font-size: 16px;
  color: #212121;
  font-family: verdana;
  margin-bottom: 20px;
  padding-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Constant = styled.span`
  font-size: 14px;
  font-weight: 200;
  letter-spacing: 0.04em;
  color: #9B9FAA;
  font-family: verdana;
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 0;
`;
