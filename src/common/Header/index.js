import {
  Wrapper,
  StyledImg,
  ContentWrapper,
  ExtraContentWrapper,
} from "./styled";

const Header = ({ img, content, extraContent1, extraContent2 }) => (
  <Wrapper>
    <StyledImg src={img} />
    <ExtraContentWrapper>{extraContent1}</ExtraContentWrapper>
    <ContentWrapper>
      {content}
      <div>{extraContent2}</div>
    </ContentWrapper>
  </Wrapper>
);

export default Header;
