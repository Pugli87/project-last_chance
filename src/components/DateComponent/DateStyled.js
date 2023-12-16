import styled from 'styled-components';

export const Container = styled.div`
  max-width: 300px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1023px) {
    margin-right: 79px;
  }
  @media (max-width: 767px) {
    min-width: 280px;
    margin-right: 0;
    margin-top: 30px;
  }
`;
export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 5px 0;
`;

export const Title = styled.h2`
  font-size: 16px;
  color: #212121;
  font-family: verdana;
  // margin-bottom: 20px;
`;

export const SubtitleDate = styled.span`
  font-size: 14px;
  color: #9b9faa;
  font-family: verdana;
  //margin-bottom: 10px;
  //padding-top: 10px;
`;

export const CaloricValue = styled.span`
  font-size: 14px;
  color: #9b9faa;
  font-family: verdana;
  //margin-left: auto;
  //padding-top: 10px;
`;
