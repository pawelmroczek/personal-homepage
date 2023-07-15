import { styled } from "styled-components";

export const Container = styled.footer`
  margin: 120px 0;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.mainText};

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    margin: 48px 0;
  }
`;

export const Email = styled.a`
  font-size: 32px;
  font-family: Inter;
  font-weight: 900;
  letter-spacing: 1.6px;
  color: ${({ theme }) => theme.colors.mainText};
  text-decoration: none;
  transition: color 0.4s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    font-size: 18px;
    font-family: Inter;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    letter-spacing: 0.9px;
  }
`;

export const EmailContainer = styled.div`
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    margin: 12px 0;
  }
`;

export const StyledParagraph = styled.p`
  max-width: 670px;
  font-size: 18px;
  font-family: Inter;
  line-height: 140%;
  letter-spacing: 0.9px;
  color: ${({ theme }) => theme.colors.mainText};
  margin: 0 0 56px;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    font-size: 14px;
    font-family: Inter;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.7px;
    margin: 0 0 40px;
  }
`;

export const Icon = styled.span`
  font-size: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    font-size: 16px;
  }
`;

export const LinksContainer = styled.div`
  margin-top: 56px;
  display: flex;
  gap: 24px;
  color: ${({ theme }) => theme.colors.mainText};

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    gap: 16px;
    margin-top:40px;
  }
`;
export const LogoLink = styled.a`
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
