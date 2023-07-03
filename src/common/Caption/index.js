import { css, styled } from "styled-components";

export const Caption = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({theme})=> theme.colors.textSecondary};

  ${({ button }) =>
    button &&
    css`
      @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px){
       display:none;
      }
    `}
`;