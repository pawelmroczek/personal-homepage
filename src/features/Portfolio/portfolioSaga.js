import { getProjects } from "./Projects/getProjects";
import {call,delay,put, select, takeEvery} from "redux-saga/effects";
import { fetchProjects, selectMode, setProjects, setStatus, toggleMode } from "./portfolioSlice";
import { saveModeToLocalStorage } from "../../modeLocalStorage";

function* fetchProjectsHandler(){
    try{
      yield delay(2500)
      const projects = yield call(getProjects, "pawelmrkoczek");
      yield put(setStatus("success"));
      yield put(setProjects(projects));
    }catch (error){
      yield put(setStatus("error"));
    }
}

function* changeModeHandler(){
  const mode = yield select(selectMode);
  yield call(saveModeToLocalStorage, mode);
}

export function* portfolioSaga(){
  yield takeEvery(fetchProjects.type, fetchProjectsHandler);
  yield takeEvery(toggleMode.type,changeModeHandler);
}