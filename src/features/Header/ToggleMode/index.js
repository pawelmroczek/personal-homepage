import { StyledSpan } from "../../../common/Span";
import { Button, Wrapper, IconBackground, Icon } from "./styled";
import buttonFrame from "../../../images/buttonFrame.svg"
import toggle from "../../../images/toggle.svg"
import icon from "../../../images/brightness 1.svg"
import { IconSVG } from "./svgs/IconSVG";
import { BGIconSVG } from "./svgs/BGIconSVG";
import { ButtonSVG } from "./svgs/ButtonSVG";

const ToggleMode = () => {
  return (
    <Wrapper>
      <StyledSpan>dark mode off</StyledSpan><Button>
        <ButtonSVG/>
        <IconBackground><BGIconSVG/></IconBackground>
        <Icon><IconSVG/></Icon>
      </Button>
    </Wrapper>
  );
};

export default ToggleMode