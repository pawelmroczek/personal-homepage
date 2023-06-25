import { useSelector } from "react-redux"
import { selectPortfolioState, selectProjects, selectStatus } from "../portfolioSlice"
import Loading from "./Loading";

const Projects = () =>{
  const status = useSelector(selectStatus);
  switch(status){
    case "loading":
      return <Loading/>
      
  }
}

export default Projects