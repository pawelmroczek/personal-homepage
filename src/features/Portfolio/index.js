import { PortfolioHeader, StyledSpan, StyledTilte, Wrapper } from "./styled";
import Projects from "./Projects";
import { GithubLogo } from "./svgs/GithubLogo";

const Portfolio = () => (
  <Wrapper>
    <PortfolioHeader>
      <GithubLogo/>
      <StyledTilte>Portfolio</StyledTilte>
      <StyledSpan>My recent projects</StyledSpan>
    </PortfolioHeader>
    <Projects/>
  </Wrapper>
);

export default Portfolio;
