import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharactersFav: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharactersFav: payload };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharactersFav: payload,
      };
    case FILTER:
      const allCharactersFiltered = state.allCharactersFav.filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites:
          payload === "allCharacters"
            ? [...state.allCharactersFav]
            : allCharactersFiltered,
      };
    case ORDER:
      const allcharactersFavCopy = [...state.allCharactersFav];
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? allcharactersFavCopy.sort((a, b) => a.id - b.id)
            : allcharactersFavCopy.sort((a, b) => b.id - a.id),
      };
    default:
      return { ...state };
  }
};

export default reducer;
