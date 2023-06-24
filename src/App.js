import { Container } from "./common/Container";
import Header from "./common/Header";
import profilePicture from "./images/profilePicture.png"
import HeaderText from "./features/Header/HeaderText";
import ToggleMode from "./features/Header/ToggleMode";
import HireButton from "./features/Header/Button";

function App() {
  return (
    <Container >
      <Header img={profilePicture} content={<HeaderText/>} extraContent1={<ToggleMode/>} extraContent2={<HireButton/>}/>
    </Container>
  );
}

export default App;
