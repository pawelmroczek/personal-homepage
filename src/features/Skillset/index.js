import Tile from "../../common/Tile";
import SkillList from "./SkillList";
import { mySkills } from "./mySkills";
import { Container } from "./styled";

const Skillset = () => {
  return (
    <Container>
      <Tile title={"My skillset includes"} icon={"🛠️"} content={<SkillList skills={mySkills.actuall}/>}/>
      <Tile title={"What I want to learn next"} icon={"🚀"} content={<SkillList skills={mySkills.next}/>}/>

    </Container>
  );
};

export default Skillset;
