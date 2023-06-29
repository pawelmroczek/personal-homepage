import { useSelector } from "react-redux";
import { StyledBullet } from "./styled";
import { selectMode } from "../../../Portfolio/portfolioSlice";

export const Dot = () => {
  const mode = useSelector(selectMode);

  return (
    <StyledBullet
      width="9"
      height="9"
      viewBox="0 0 9 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle id="Ellipse 31" cx="4.5" cy="4.5" r="4.5" fill={mode==="dark" ? "#2188FF" : "#0366D6"} />
    </StyledBullet>
  );
};
