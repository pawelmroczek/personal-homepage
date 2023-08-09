import { Caption } from "../../common/Caption";
import {
  Container,
  Email,
  Icon,
  LinksContainer,
  LogoLink,
  EmailContainer,
} from "./styled";
import { GithubIcon } from "./svgs/GithubIcon";
import { FacebookIcon } from "./svgs/FacebookIcon";
import { LinkedinIcon } from "./svgs/LinkedinIcon";
import { InstagramIcon } from "./svgs/InstagramIcon";
import { Paragraph } from "../../common/Paragraph/Paragraph";

const Footer = () => (
  <Container>
    <Caption>Let's talk!</Caption>
    <EmailContainer>
      <Email href="mailto:pawel.mroczekpl@gmail.com">
        pawel.mroczekpl@gmail.com
      </Email>
    </EmailContainer>
    <Paragraph>
      I'm always open to new projects whenever I have the time. If you have a
      website, dashboard or mobile app in mind and need some help to make your
      ideas come to life, feel free to contact me <Icon>🤞</Icon>
    </Paragraph>
    <LinksContainer>
      <LogoLink href="https://github.com/pawelmroczek">
        <GithubIcon />
      </LogoLink>
      <LogoLink href="https://www.facebook.com/pawel.mroczekpl/">
        <FacebookIcon />
      </LogoLink>
      <LogoLink href="https://www.linkedin.com/in/pawel-mroczek/">
        <LinkedinIcon />
      </LogoLink>
      <LogoLink href="https://www.instagram.com/pawel__mroczek/">
        <InstagramIcon />
      </LogoLink>
    </LinksContainer>
  </Container>
);
export default Footer;
