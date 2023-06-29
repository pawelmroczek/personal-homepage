import { styled } from "styled-components";

export const Icon = styled.svg`
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
