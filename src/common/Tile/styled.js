import { styled } from "styled-components";

export const Container = styled.section`
  background-color: ${({theme})=>theme.colors.tileBackground};
  display: flex;
  flex-direction: column;
  padding: 32px;
  box-shadow: ${({theme})=>theme.colors.boxShadow};
  margin-top: 72px;
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px){
    margin-top:48px;
  }
`;

export const StyledSpan = styled.span`
  text-align: center;
  font-size: 24px;
  font-family: Inter;
  letter-spacing: 1.2px;
  margin-left: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px){
    font-size:16px;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color:${({theme})=>theme.colors.diffBGNeutral};
  margin:15px 0 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px){
    margin:12px 0;
  }
`;

