import { PortfolioHeader, StyledSpan, StyledTilte, Wrapper } from "./styled";
import GitLogo from "../../images/mark-github.svg";
import Projects from "./Projects";

const Portfolio = () => (
  <Wrapper>
    <PortfolioHeader>
      <img src={GitLogo} />
      <StyledTilte>Portfolio</StyledTilte>
      <StyledSpan>My recent projects</StyledSpan>
    </PortfolioHeader>
    <Projects/>
  </Wrapper>
);

export default Portfolio;
