import { Container } from "../common/Container";
import Header from "../common/Header";
import Footer from "./Footer";
import HireButton from "./Header/Button";
import HeaderText from "./Header/HeaderText";
import ToggleMode from "./Header/ToggleMode";
import Portfolio from "./Portfolio";
import Skillset from "./Skillset";
import profilePicture from "../images/profilePicture.png";

const CV = () => (
  <Container>
    <Header
      img={profilePicture}
      content={<HeaderText />}
      extraContent1={<ToggleMode />}
      extraContent2={<HireButton />}
    />
    <Skillset />
    <Portfolio />
    <Footer />
  </Container>
);

export default CV;
