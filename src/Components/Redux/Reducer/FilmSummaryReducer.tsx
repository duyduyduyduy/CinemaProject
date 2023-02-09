const initialState = {
  nameFilm: "",
  filmImg: "",
  age: "",
  Cinema: "",
  showTime: "",
  Combo: "",
  Seat: "",
};
const FilmSummaryReducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    case "GET_FILM_INFO_TO_TICKET":
      return {
        ...state,
        nameFilm: action.payload.nameFilm,
        age: action.payload.age,
        Cinema: action.payload.Cinema,
        showTime: action.payload.showTime,
        filmImg: action.payload.filmImg,
      };
    default:
      return state;
  }
};
export default FilmSummaryReducer;
