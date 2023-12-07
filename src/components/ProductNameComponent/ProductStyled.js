import styled from 'styled-components';


 const Text = styled.p`
  font-size: 18px;
  margin-top: 60px;
  color : #9B9FAA;
  font-family : verdana;
`;


 const ProductList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top:50px;
 
`;

 const ProductItem = styled.li`
  font-size: 16px;
  color : #9B9FAA;
  margin-bottom: 5px;
  font-family : verdana;
  padding-top : 30px;
`;
export {
    Text,ProductList,ProductItem
}