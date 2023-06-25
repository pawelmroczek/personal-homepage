import { createSlice } from "@reduxjs/toolkit";

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState: {
    mode: "light",
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
    }
  },
});

export const { fetchProjects, setProjects, setStatus } = portfolioSlice.actions;

export const selectPortfolioState = (state) => state.portfolio;
export const selectMode = (state) => selectPortfolioState(state).mode;
export const selectProjects = (state) => selectPortfolioState(state).projects;
export const selectStatus = (state) => selectPortfolioState(state).status;

export default portfolioSlice.reducer;
