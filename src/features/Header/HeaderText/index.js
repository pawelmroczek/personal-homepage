import { StyledSpan } from "../../../common/Span";
import { Wrapper, StyledHeader, StyledParagraph } from "./styled";

const HeaderText = () => (
  <Wrapper>
    <StyledSpan>This is</StyledSpan>
    <StyledHeader>Paweł Mroczek</StyledHeader>
    <StyledParagraph>
      👨🏻‍💻 I'm a passionate Frontend Developer in love with React, <br />
      currently looking for new job opportunities.
    </StyledParagraph>
  </Wrapper>
);

export default HeaderText;
