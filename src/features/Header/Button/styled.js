import { styled } from "styled-components";

export const StyledLink = styled.a`
  background-color: ${({ theme }) => theme.colors.blue};
  font-size: 20.058px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.003px;
  color: ${({ theme }) => theme.colors.white};
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.diffBGNeutral};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  text-decoration: none;
  margin-top: 32px;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow:${({theme})=>theme.colors.buttonFocus};
  }
`;
