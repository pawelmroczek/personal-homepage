import { styled } from "styled-components";

export const Wrapper = styled.div`
  margin-top: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  font-family: Inter;
  line-height: 140%;
  letter-spacing: 1px;
  text-align: center;
`;
export const Title = styled.h3`
  font-size: 24px;
  font-family: Inter;
  font-weight: 700;
  letter-spacing: 1.2px;
  margin: 16px 0 32px;
`;

export const Link = styled.a`
  text-align: center;
  font-size: 20.058px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.003px;
  text-decoration:none;
  background-color:${({ theme }) => theme.colors.scienceBlue};
  border-radius: 4px;
  border: 1px solid var(--semi-grey, rgba(209, 213, 218, 0.10));
  color:${({theme})=>theme.colors.white};
  padding:12px 16px;
  margin-top:32px;
`;
