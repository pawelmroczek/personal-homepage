import { StyledSpan } from "../../common/Span";
import {
  Container,
  Email,
  StyledParagraph,
  Icon,
  LinksContainer,
  LogoLink,
  EmailContainer,
} from "./styled";
import { GithubIcon } from "./svgs/GithubIcon";
import { FacebookIcon } from "./svgs/FacebookIcon";
import { LinkedinIcon } from "./svgs/LinkedinIcon";
import { InstagramIcon } from "./svgs/InstagramIcon";

const Footer = () => (
  <Container>
    <StyledSpan>Let's talk!</StyledSpan>
    <EmailContainer>
      <Email href="mailto:pawel.mroczekpl@gmail.com">
        pawel.mroczekpl@gmail.com
      </Email>
    </EmailContainer>
    <StyledParagraph>
      I'm always open to new projects whenever I have the time. If you have a
      website, dashboard or mobile app in mind and need some help to make your
      ideas come to life, feel free to conatct me <Icon>🤞</Icon>
    </StyledParagraph>
    <LinksContainer>
      <LogoLink>
        <GithubIcon />
      </LogoLink>
      <LogoLink>
        <FacebookIcon />
      </LogoLink>
      <LogoLink>
        <LinkedinIcon />
      </LogoLink>
      <LogoLink>
        <InstagramIcon />
      </LogoLink>
    </LinksContainer>
  </Container>
);
export default Footer;
