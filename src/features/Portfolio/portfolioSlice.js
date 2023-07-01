import { createSlice } from "@reduxjs/toolkit";
import { getModeFromLocalStorage } from "../../modeLocalStorage";

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    mode: getModeFromLocalStorage(),
    projects: [],
    status: "loading",
  },
  reducers: {
    fetchProjects: () => {},
    setProjects: (state, { payload: projects }) => {
      state.projects = projects;
    },
    setStatus:(state, {payload: status})=>{
      state.status=status;
    },
    toggleMode:(state) =>{
      if(state.mode ==="light"){
        state.mode = "dark";
      }else{
        state.mode ="light"
      }
    }
  },
});

export const { fetchProjects, setProjects, setStatus, toggleMode } = portfolioSlice.actions;

export const selectPortfolioState = (state) => state.portfolio;
export const selectMode = (state) => selectPortfolioState(state).mode;
export const selectProjects = (state) => selectPortfolioState(state).projects;
export const selectStatus = (state) => selectPortfolioState(state).status;

export default portfolioSlice.reducer;
