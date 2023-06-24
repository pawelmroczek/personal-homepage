import { Container, Divider, StyledSpan, StyledTitle } from "./styled";

const Tile = ({ title, content, icon }) => (
  <Container>
    <StyledTitle>
      {title} <StyledSpan>{icon}</StyledSpan>
    </StyledTitle>

    <Divider></Divider>
    <div>{content}</div>
  </Container>
);

export default Tile;
