import { PortfolioHeader, StyledSpan, StyledTilte, Wrapper } from "./styled";
import GitLogo from "../../images/mark-github.svg"

const Portfolio = () => {
  return (
    <Wrapper>
      <PortfolioHeader>
        <img src={GitLogo}/>
        <StyledTilte>Portfolio</StyledTilte>
        <StyledSpan>My recent projects</StyledSpan>
      </PortfolioHeader>
    </Wrapper>
  );
};

export default Portfolio;