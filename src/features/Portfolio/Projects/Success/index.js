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
            Demo: <StyledLink href={project.homepage}>{project.homepage}</StyledLink> <br />
            Code: <StyledLink href={project.html_url}>{project.html_url}</StyledLink>
          </div>
        </Tile>
      ))}
    </Container>
  );
};

export default Success;
