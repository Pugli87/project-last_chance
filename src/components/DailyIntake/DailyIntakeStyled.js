import styled from 'styled-components';

export const Form = styled.form`
  display:flex;
  margin-top: 48px;
`;

export const ContainForm = styled.div`
display: flex;
align-items: flex-end;
`;

export const Wrapper = styled.div`
 display: flex;
 margin-right: 50px;
`;


export const Input = styled.input`
border: none;
border-bottom: 1px solid lightgray;
width: 240px;
text-align: left;
font-family: Verdana;
outline:none;
&: focus {
  border-bottom: 1px solid orange;
}
`;

export const InputGramos = styled.input`
border: none;
border-bottom: 1px solid lightgray;
margin-right: 48px;
width: 105px;
text-align: left;
font-family: Verdana;
outline:none;
&: focus {
  border-bottom: 1px solid orange;
}
`;

export const Label = styled.label`
display: flex;
flex-direction: column;
width: 240px;
color: lightgray;

`;

export const LabelGramos = styled.label`
display: flex;
flex-direction: column; 
width: 107px;
text-align: end;
color: lightgray;

`;

export const Button = styled.button`
    padding: 2px 19px;
    display: flex;
    color: white;
    font-size: 22px;
    border-radius: 50%;
    background-color: #ec6b15;
    align-items: center;
    justify-content: center;
`;










