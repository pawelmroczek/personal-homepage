import { StyledLink } from "./styled";
import EmailIcon from "../../../images/Iconly/Light/Message.svg";

const HireButton = () => {
  return (
    <StyledLink href="mailto:pawel.mroczekpl@gmail.com">
      <img src={EmailIcon} />
      Hire Me
    </StyledLink>
  );
};

export default HireButton;
