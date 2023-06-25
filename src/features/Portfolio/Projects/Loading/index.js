import { Icon, Wrapper } from "./styled"
import loadingIcon from "../../../../images/loading-icon.svg"

const Loading = () => (
  <Wrapper>Please wait, projects are being loaded...
    <Icon src={loadingIcon}/>
  </Wrapper>
)

export default Loading