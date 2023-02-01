import { takeEvery, put, call } from "redux-saga/effects";
const FetchDataFromFirstAPI = async () => {
  let res = await fetch(
    "https://teachingserver.onrender.com/cinema/nowAndSoon"
  );
  let data = await res.json();
  return data;
};
function* getdatafromFirstAPI(action: any): any {
  console.log("The number of fetching API");
  let data = yield call(FetchDataFromFirstAPI);
  yield put({
    type: "GET_CURRENT_FILM",
    payload: data.movieShowing,
  });
  yield put({
    type: "GET_NEXT_FILM",
    payload: data.movieCommingSoon,
  });
}
function* mySaga() {
  yield takeEvery("FECTH_DATA_FROM_FIRST_API", getdatafromFirstAPI);
}
export default mySaga;