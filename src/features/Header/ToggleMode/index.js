import { StyledSpan } from "../../../common/Span";
import { Button, Wrapper, IconBackground, Icon } from "./styled";
import buttonFrame from "../../../images/buttonFrame.svg";
import toggle from "../../../images/toggle.svg";
import icon from "../../../images/brightness 1.svg";
import { IconSVG } from "./svgs/IconSVG";
import { BGIconSVG } from "./svgs/BGIconSVG";
import { ButtonSVG } from "./svgs/ButtonSVG";
import { useDispatch, useSelector } from "react-redux";
import { selectMode, toggleMode } from "../../Portfolio/portfolioSlice";

const ToggleMode = () => {
  const mode = useSelector(selectMode);
  const darkMode = mode == "dark";
  const dispatch =useDispatch();

  return (
    <Wrapper>
      <StyledSpan>dark mode {darkMode ? "on" : "off"}</StyledSpan>
      <Button onClick={()=>dispatch(toggleMode())}>
        <ButtonSVG darkMode={darkMode}/>
        <IconBackground darkMode={darkMode}>
          <BGIconSVG />
        </IconBackground>
        <Icon darkMode={darkMode}>
          <IconSVG />
        </Icon>
      </Button>
    </Wrapper>
  );
};

export default ToggleMode;
