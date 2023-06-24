import { StyledSpan } from "../Span";
import { Wrapper, StyledHeader, StyledParagrapgh } from "./styled";

const HeaderText = () => (
  <Wrapper>
    <StyledSpan>This is</StyledSpan>
    <StyledHeader>Krzysiek Dąbrowski</StyledHeader>
    <StyledParagrapgh>
      👨🏻‍💻 I'm a passionate Frontend Developer in love with React, <br />
      currently looking for new job opportunities.
    </StyledParagrapgh>
  </Wrapper>
);

export default HeaderText;
