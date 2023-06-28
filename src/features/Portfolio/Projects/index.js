import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, selectStatus } from "../portfolioSlice";
import Loading from "./Loading";
import { useEffect } from "react";
import Success from "./Success";
import Failure from "./Failure";

const Projects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  const status = useSelector(selectStatus);

  switch (status) {
    case "loading":
      return <Loading />;
    case "success":
      return <Success />;
    case "error":
      return <Failure />;
  }
};

export default Projects;
