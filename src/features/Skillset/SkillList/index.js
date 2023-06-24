import { StyledList, StyledItem, StyledImg } from "./styled";
import Bullet from "../../../images/Ellipse 31.svg"

const SkillList = ({ skills }) => {
  return (
    <StyledList>
      {skills.map(skill=>(
         <StyledItem><StyledImg src={Bullet}/>{skill}</StyledItem>
      ))}
    </StyledList>
  );
};

export default SkillList;
