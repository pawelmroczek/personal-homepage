import { styled } from "styled-components";
import { StyledH2 } from "../../common/StyledH2/StyledH2";

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
export const StyledTilte = styled(StyledH2)`
  margin: 12px 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
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
