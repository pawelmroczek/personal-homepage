import { StyledList, StyledItem, StyledImg } from "./styled";
import { Dot } from "./svgs/dot";

const SkillList = ({ skills }) => {
  return (
    <StyledList>
      {skills.map(skill=>(
         <StyledItem><Dot/>{skill}</StyledItem>
      ))}
    </StyledList>
  );
};

export default SkillList;
