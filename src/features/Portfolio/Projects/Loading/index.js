import { Icon, Wrapper } from "./styled";
import loadingIcon from "../../../../images/loading-icon.svg";
import { Loader } from "../../svgs/Loader";
import { LeadParagraph } from "../../../../common/LeadParagraph/LeadParagraph";

const Loading = () => (
  <Wrapper>
    <LeadParagraph>Please wait, projects are being loaded...</LeadParagraph>
    <Loader />
  </Wrapper>
);

export default Loading;
