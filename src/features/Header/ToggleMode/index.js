import { StyledSpan } from "../../../common/Span";
import { Button, Wrapper, IconBackground, Icon } from "./styled";
import { IconSVG } from "./svgs/IconSVG";
import { BGIconSVG } from "./svgs/BGIconSVG";
import { ButtonSVG } from "./svgs/ButtonSVG";
import { useDispatch, useSelector } from "react-redux";
import { selectMode, toggleMode } from "../../Portfolio/portfolioSlice";

const ToggleMode = () => {
  const mode = useSelector(selectMode);
  const darkMode = mode == "dark";
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <StyledSpan>dark mode {darkMode ? "on" : "off"}</StyledSpan>
      <Button onClick={() => dispatch(toggleMode())}>
        <ButtonSVG darkMode={darkMode} />
        <IconBackground darkMode={darkMode}>
          <BGIconSVG darkMode={darkMode} />
        </IconBackground>
        <Icon darkMode={darkMode}>
          <IconSVG darkMode={darkMode} />
        </Icon>
      </Button>
    </Wrapper>
  );
};

export default ToggleMode;
