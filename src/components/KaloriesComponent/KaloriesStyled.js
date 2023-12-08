import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
text-align: center;
position: relative;
top: -700px; 
left: -100px;
`;

export const CaloriesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top:50px;
`;

export const CaloriesItem = styled.li`
font-size: 16px;
color : #212121;
font-family : verdana;
padding-top : 30px;
`;

export const DeleteButton = styled.button`

margin-left:30px;
  color: #9B9FAA;
  border: none;
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 50%;
`;