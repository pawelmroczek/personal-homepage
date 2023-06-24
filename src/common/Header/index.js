import { Wrapper, StyledImg, ContentWrapper, ExtraContentWrapper } from "./styled";

const Header = ({ img, content, extraContent1, extraContent2 }) => (
  <Wrapper>
    <StyledImg src={img} />
    <ContentWrapper>
      <ExtraContentWrapper>{extraContent1}</ExtraContentWrapper>
      {content}
      {extraContent2}
    </ContentWrapper>
  </Wrapper>
);

export default Header;
