import { Caption } from "../../../common/Caption";
import { LeadParagraph } from "../../../common/LeadParagraph/LeadParagraph";
import { Wrapper, StyledHeader, StyledParagraph } from "./styled";

const HeaderText = () => (
  <Wrapper>
    <Caption>This is</Caption>
    <StyledHeader>Paweł Mroczek</StyledHeader>
    <LeadParagraph>
      👨🏻‍💻 I'm a passionate Frontend Developer in love with React, <br />
      currently looking for new job opportunities.
    </LeadParagraph>
  </Wrapper>
);

export default HeaderText;
