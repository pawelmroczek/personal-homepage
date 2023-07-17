import { styled } from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const StyledHeader = styled.h1`
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 1.9px;
  color: ${({ theme }) => theme.colors.mainText};
  margin: 12px 0 35px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    font-size: 24px;
    margin: 8px 0 16px 0;
  }
`;

