import { styled } from "styled-components";

export const Paragraph = styled.p`
  font-size: 18px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.9px;
  max-width: 670px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    font-size: 14px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.7px;
  }
`;
