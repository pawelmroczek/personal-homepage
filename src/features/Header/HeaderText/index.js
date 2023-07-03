import { Caption } from "../../../common/Caption";
import { Wrapper, StyledHeader, StyledParagraph } from "./styled";

const HeaderText = () => (
  <Wrapper>
    <Caption>This is</Caption>
    <StyledHeader>Paweł Mroczek</StyledHeader>
    <StyledParagraph>
      👨🏻‍💻 I'm a passionate Frontend Developer in love with React, <br />
      currently looking for new job opportunities.
    </StyledParagraph>
  </Wrapper>
);

export default HeaderText;
