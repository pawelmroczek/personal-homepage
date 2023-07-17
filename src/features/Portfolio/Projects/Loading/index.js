import { Wrapper } from "./styled";
import { Loader } from "../../svgs/Loader";
import { LeadParagraph } from "../../../../common/LeadParagraph/LeadParagraph";

const Loading = () => (
  <Wrapper>
    <LeadParagraph>Please wait, projects are being loaded...</LeadParagraph>
    <Loader />
  </Wrapper>
);

export default Loading;
