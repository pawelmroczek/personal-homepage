import { configureStore } from "@reduxjs/toolkit";
import portfolioSlice from "./features/Portfolio/portfolioSlice";
import createSagaMiddleware from "redux-saga";
import { portfolioSaga } from "./features/Portfolio/portfolioSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    portfolio: portfolioSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(portfolioSaga);

export default store;
