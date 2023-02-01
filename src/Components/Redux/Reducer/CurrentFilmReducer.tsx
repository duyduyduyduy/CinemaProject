import eFilm from "../../Model/eFilm";

const initialState = {
  lsCurFilm: [],
};
const CurrentFilmReducer = (
  state = initialState,
  action: { type: string; payload: Array<eFilm> }
) => {
  switch (action.type) {
    case "GET_CURRENT_FILM":
      return {
        ...state,
        lsCurFilm: action.payload,
      };
    default:
      return state;
  }
};
export default CurrentFilmReducer;
