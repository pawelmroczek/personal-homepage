import { Container } from "./common/Container";
import Header from "./common/Header";
import profilePicture from "./images/profilePicture.png"
import HeaderText from "./features/Header/HeaderText";
import ToggleMode from "./features/Header/ToggleMode";
import HireButton from "./features/Header/Button";
import Skillset from "./features/Skillset";

function App() {
  return (
    <Container >
      <Header img={profilePicture} content={<HeaderText/>} extraContent1={<ToggleMode/>} extraContent2={<HireButton/>}/>
      <Skillset/>
    </Container>
  );
}

export default App;
