import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.mainText};
  padding-top: 88px;
  gap: 48px;
`;

export const Icon = styled.img`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  width: 160px;
  height: 160px;
  animation: spin 2s linear infinite;
`;
