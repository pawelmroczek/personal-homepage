import { StyledH2 } from "../StyledH2/StyledH2";
import { Container, Divider, StyledSpan } from "./styled";

const Tile = ({ title, content, icon }) => (
  <Container>
    <StyledH2>
      {title} <StyledSpan>{icon}</StyledSpan>
    </StyledH2>
    <Divider></Divider>
    <div>{content}</div>
  </Container>
);

export default Tile;
