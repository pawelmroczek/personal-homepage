import { useSelector } from "react-redux";
import { selectProjects } from "../../portfolioSlice";
import { Container, StyledLink, StyledParagraph, Tile, Title } from "./styled";

const Success = () => {
  const projects = useSelector(selectProjects);

  return (
    <Container>
      {projects.map((project) => (
        <Tile>
          <Title>{project.name}</Title>
          <StyledParagraph>{project.description}</StyledParagraph>
          <div>
            Demo: <StyledLink>{project.homepage}</StyledLink> <br />
            Code: <StyledLink>{project.html_url}</StyledLink>
          </div>
        </Tile>
      ))}
    </Container>
  );
};

export default Success;
