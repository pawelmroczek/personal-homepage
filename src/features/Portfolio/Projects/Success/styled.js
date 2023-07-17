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

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumMedia}px) {
    grid-template-columns: 1fr;
  }
`;

export const Tile = styled.div`
  background-color: ${({ theme }) => theme.colors.tileBackground};
  padding: 56px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;
  border: 6px solid ${({ theme }) => theme.colors.diffBGNeutral};

  &:hover {
    border: 6px solid ${({ theme }) => theme.colors.tileBorder};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    gap: 16px;
    padding: 24px;
    font-size: 14px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.7px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  font-family: Inter;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: ${({ theme }) => theme.colors.blue};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    font-size: 16px;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.8px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    font-size: 14px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.7px;
  }
`;
