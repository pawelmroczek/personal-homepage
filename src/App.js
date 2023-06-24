import { Container } from "./common/Container";
import Header from "./common/Header";
import profilePicture from "./images/profilePicture.png"
import HeaderText from "./features/Header/HeaderText";
import ToggleMode from "./features/Header/ToggleMode";

function App() {
  return (
    <Container >
      <Header img={profilePicture} content={<HeaderText/>} extraContent1={<ToggleMode/>}/>
    </Container>
  );
}

export default App;
