import { StyledSpan } from "../Span";
import { Button, Wrapper, IconBackground, Icon } from "./styled";
import buttonFrame from "../../../images/buttonFrame.svg"
import toggle from "../../../images/toggle.svg"
import icon from "../../../images/brightness 1.svg"
import { IconSVG } from "./svgs/icon";

const ToggleMode = () => {
  return (
    <Wrapper>
      <StyledSpan>dark mode off</StyledSpan><Button>
        <img src={buttonFrame}/>
        <IconBackground src={toggle}/>
        <Icon><IconSVG/></Icon>
      </Button>
    </Wrapper>
  );
};

export default ToggleMode