import { configureStore } from "@reduxjs/toolkit";
import portfolioSlice from "./features/Portfolio/portfolioSlice";

const store = configureStore({
  reducer: {
    portfolio: portfolioSlice,
  },
});

export default store;
