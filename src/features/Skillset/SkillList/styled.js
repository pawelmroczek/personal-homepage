import { styled } from "styled-components";

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0px;
  margin: 0px;
  list-style: none;
`;

export const StyledItem = styled.li`
  margin: 8px 0;
  font-size: 18px;
  font-family: Inter;
  line-height: 140%;
  letter-spacing: 0.9px;
`;

export const StyledImg= styled.img`
  margin-right:16px;
`