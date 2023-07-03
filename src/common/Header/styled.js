import { styled } from "styled-components";

export const Wrapper = styled.header`
  width:100%;
  display:flex;
  gap:66px;
  position: relative;
  align-items:center;
  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px){
    flex-direction:column;
    gap:13px;
  }
`;

export const StyledImg = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 384px;

  @media (max-width: ${({ theme }) => theme.breakpoints.phoneMedia}px){
    width: 132.667px;
    height:132.667px;
    align-self: start;
  }
`;

export const ContentWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-items:center;
`
export const ExtraContentWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`