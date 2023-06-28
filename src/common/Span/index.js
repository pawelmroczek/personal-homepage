import { styled } from "styled-components";

export const StyledSpan = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({theme})=> theme.colors.textSecondary};
`;