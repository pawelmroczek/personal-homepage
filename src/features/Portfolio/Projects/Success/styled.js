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
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.colors.diffBGNeutral};

  &:hover {
    border: 6px solid ${({ theme }) => theme.colors.tileBorder};
  }
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
  transition: border-bottom 0.4s ease-in-out;
  word-wrap: break-word;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.linkBorderHover};
  }
`;
