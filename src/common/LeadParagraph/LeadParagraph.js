import { styled } from "styled-components";

export const LeadParagraph = styled.p`
  font-size: 20px;
  font-family: Inter;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 1px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    font-size: 17px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.85px;
  }
`;
