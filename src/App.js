import { Container } from "./common/Container";
import Header from "./common/Header";
import profilePicture from "./images/profilePicture.png"
import HeaderText from "./features/Header/HeaderText";
import ToggleMode from "./features/Header/ToggleMode";
import HireButton from "./features/Header/Button";
import Skillset from "./features/Skillset";
import Portfolio from "./features/Portfolio";
import Footer from "./features/Footer";

function App() {
  return (
    <Container >
      <Header img={profilePicture} content={<HeaderText/>} extraContent1={<ToggleMode/>} extraContent2={<HireButton/>}/>
      <Skillset/>
      <Portfolio/>
      <Footer/>
    </Container>
  );
}

export default App;
