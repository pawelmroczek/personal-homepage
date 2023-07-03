import { styled } from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0px;
  margin: 0px;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px){
    display:block;
  }
`;

export const StyledItem = styled.li`
  margin: 8px 0;
  font-size: 18px;
  font-family: Inter;
  line-height: 140%;
  letter-spacing: 0.9px;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px){
    font-size:14px;
  }
`;

export const StyledImg= styled.img`
  margin-right:16px;
`