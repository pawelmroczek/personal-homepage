import { getProjects } from "./Projects/getProjects";
import {call,delay,put, takeEvery} from "redux-saga/effects";
import { fetchProjects, setProjects, setStatus } from "./portfolioSlice";

function* fetchProjectsHandler(){
    try{
      yield delay(2500)
      const projects = yield call(getProjects, "pawelmroczek");
      yield put(setStatus("success"));
      yield put(setProjects(projects));
    }catch (error){
      yield put(setStatus("error"));
    }
}

export function* portfolioSaga(){
  yield takeEvery(fetchProjects.type, fetchProjectsHandler);
}