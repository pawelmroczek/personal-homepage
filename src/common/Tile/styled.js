import { styled } from "styled-components";

export const Container = styled.section`
  background-color: ${({theme})=>theme.colors.tileBackground};
  display: flex;
  flex-direction: column;
  padding: 32px;
  box-shadow: 0px 16px 58px 0px rgba(9, 10, 51, 0.03),
    0px -2px 50px 0px rgba(9, 10, 51, 0.02);
  margin-top: 72px;
  border-radius: 4px;
`;

export const StyledTitle = styled.h2`
  font-size: 30px;
  font-family: Inter;
  font-weight: 900;
  letter-spacing: 1.5px;
  margin:0;
`;

export const StyledSpan = styled.span`
  text-align: center;
  font-size: 24px;
  font-family: Inter;
  letter-spacing: 1.2px;
  margin-left: 16px;
`;

export const Divider = styled.div`
  width: 1151px;
  height: 1px;
  background-color:${({theme})=>theme.colors.diffBGNeutral};
  margin:15px 0 32px;
`;

