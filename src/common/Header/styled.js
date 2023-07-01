import { styled } from "styled-components";

export const Wrapper = styled.header`
  width:100%;
  display:flex;
  gap:66px;
  position: relative;
  align-items:center;
`;

export const StyledImg = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 384px;
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