import { styled } from "styled-components";

export const Wrapper = styled.section`
  padding: 0px;
  margin-top: 72px;
  color: ${({ theme }) => theme.colors.blue};
  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    margin-top: 48px;
  }
`;

export const PortfolioHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export const StyledTilte = styled.h2`
  font-size: 30px;
  font-family: Inter;
  margin: 12px 0 8px;
  font-weight: 900;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.colors.mainText};

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    font-size: 18px;
    font-family: Inter;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0.9px;
    margin: 12px 0 16px;
  }
`;

export const StyledSpan = styled.span`
  font-size: 20px;
  font-family: Inter;
  line-height: 140%;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.mainText};
`;
