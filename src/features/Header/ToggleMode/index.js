import { Button, Wrapper, IconBackground, Icon } from "./styled";
import { IconSVG } from "./svgs/IconSVG";
import { BGIconSVG } from "./svgs/BGIconSVG";
import { ButtonSVG } from "./svgs/ButtonSVG";
import { useDispatch, useSelector } from "react-redux";
import { selectMode, toggleMode } from "../../Portfolio/portfolioSlice";
import { Caption } from "../../../common/Caption";

const ToggleMode = () => {
  const mode = useSelector(selectMode);
  const darkMode = mode == "dark";
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Caption button={true}>dark mode {darkMode ? "on" : "off"}</Caption>
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
