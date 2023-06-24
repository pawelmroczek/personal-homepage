import { styled } from "styled-components";

export const Wrapper = styled.header`
  width:100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap:66px;
`;

export const StyledImg = styled.img`
  width: 384px;
  height: 384px;
  border-radius: 384px;
`;

export const ContentWrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-items:flex-start;
`
export const ExtraContentWrapper = styled.div`
  align-self:flex-end;
`