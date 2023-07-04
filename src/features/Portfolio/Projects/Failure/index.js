import { Link, Title, Wrapper } from "./styled";
import ErrorIcon from "../../../../images/Iconly/Light/Danger.svg";
import { LeadParagraph } from "../../../../common/LeadParagraph/LeadParagraph";

const Failure = () => (
  <Wrapper>
    <img src={ErrorIcon} />
    <Title>Ooops! Something went wrong...</Title>
    <LeadParagraph>
      Sorry, failed to load Github projects. <br /> You can check them directly
      on Github.
    </LeadParagraph>
    <Link href="https://github.com/pawelmroczek">Go to Github</Link>
  </Wrapper>
);
export default Failure;
