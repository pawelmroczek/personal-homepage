import { Icon, Wrapper } from "./styled"
import loadingIcon from "../../../../images/loading-icon.svg"
import { Loader } from "../../svgs/Loader"

const Loading = () => (
  <Wrapper>Please wait, projects are being loaded...
    <Loader/>
  </Wrapper>
)

export default Loading