import { styled } from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StyledHeader = styled.h1`
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 1.9px;
  color: ${({ theme }) => theme.colors.blackText};
  margin: 12px 0 35px 0;
`;

export const StyledParagraph = styled.p`
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 1px;
  margin:0px;
`;
