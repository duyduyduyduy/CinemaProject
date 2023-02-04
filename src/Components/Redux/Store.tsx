import { combineReducers, createStore, applyMiddleware } from "redux";
import MiddleReSa from "./Saga/MiddleReSa";
import reduxSaga from "redux-saga";
import CurrentFilmReducer from "./Reducer/CurrentFilmReducer";
import NextFilmReducer from "./Reducer/NextFilmReducer";
import ModalPopup from "./Reducer/ModalPopup";
const middleware = reduxSaga();
const allReducer = combineReducers({
  CurrentFilmState: CurrentFilmReducer,
  NextFilmState: NextFilmReducer,
  ModalPopupState: ModalPopup,
});
export default createStore(allReducer, applyMiddleware(middleware));
middleware.run(MiddleReSa);
