import { css, styled } from "styled-components";

export const Wrapper= styled.div`
  margin-bottom:38px;
  display:flex;
  align-items:center;
  gap:12px;
`

export const Button = styled.button`
  /* width: 48px;
  height: 26px;  */
  padding:0px;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  border:none;
  background:none;
`

export const IconBackground = styled.div`
  position:absolute;
  margin:3px;
  display:flex;
  align-items:center;
  justify-content:center;
  transition: margin-left 0.3s ease-in-out;

  ${({darkMode})=> darkMode && css`
    margin-left:25px;
  `}
`

export const Icon = styled.div`
  position:absolute;
  margin:6px;
  display:flex;
  align-items:center;
  justify-content:center;
  transition: margin-left 0.3s ease-in-out;

  ${({darkMode})=> darkMode && css`
    margin-left:28px;
  `}
`