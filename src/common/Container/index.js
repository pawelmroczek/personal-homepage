import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 1248px;
  margin: 115px auto;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px) {
    margin: 21px auto;
  }
`;
