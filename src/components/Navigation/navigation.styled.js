import styled from 'styled-components';

export const ContainerNavigation = styled.nav`
  display: flex;
  gap: 10px;
`;
export const NavigationLink = styled.div`
 font-family: Verdana;
font-size: 14px;
font-weight: 700;
line-height: 17px;
letter-spacing: 0.04em;
text-align: center;
color: #9B9FAA;
padding: 40px 10px;

  &:active {
    color: #212121
  }

  &:hover,
  &:focus {
    color: #212121;
    scale: 1.1;
  }x
`;
