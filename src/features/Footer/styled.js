import { styled } from "styled-components";

export const Container = styled.footer`
  margin: 120px 0;
  display: flex;
  flex-direction: column;
`;

export const Email = styled.a`
  font-size: 32px;
  font-family: Inter;
  font-weight: 900;
  letter-spacing: 1.6px;
  color: ${({ theme }) => theme.colors.mainText};
  margin: 24px 0;
  text-decoration: none;
`;
export const StyledParagraph = styled.p`
  width: 670px;
  font-size: 18px;
  font-family: Inter;
  line-height: 140%;
  letter-spacing: 0.9px;
  color: ${({ theme }) => theme.colors.mainText};
  margin: 0 0 56px;
`;

export const Icon = styled.span`
  font-size: 24px;
`;

export const LinksContainer = styled.div`
  display:flex;
  gap:24px;
`
