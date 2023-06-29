import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  margin-top: 24px;
  font-size: 18px;
  font-family: Inter;
  line-height: 140%;
  letter-spacing: 0.9px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.colors.tileBackground};
  padding: 56px;
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-family: Inter;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: ${({ theme }) => theme.colors.blue};
  margin: 0;
`;

export const StyledParagraph = styled.div`
  margin: 24px 0;
`;
export const StyledLink = styled.a`
  font-size: 18px;
  font-family: Inter;
  line-height: 140%;
  text-decoration: none;
  letter-spacing: 0.9px;
  color: ${({ theme }) => theme.colors.blue};
  border-bottom: 1px solid ${({ theme }) => theme.colors.linkBorder};
`;
