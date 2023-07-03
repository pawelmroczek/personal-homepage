import { styled } from "styled-components";

export const StyledH2 = styled.h2`
  font-size: 30px;
  font-family: Inter;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.colors.mainText};
  margin: 0;
  word-wrap: break-word;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    font-size: 18px;
    letter-spacing: 0.9px;
  }
`;
