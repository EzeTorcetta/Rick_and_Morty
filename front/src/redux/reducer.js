import { ADD_CHARACTER, FILTER, REMOVE_CHARACTERS, ORDER } from "./actions"

const initialState = {
    myFavorites: [],
    allCharacters: [],
}

const rootReducer = (state = initialState, action) => { // action es un obj {type: , payload:}

    switch (action.type) {

        // case GET_ALL_CHARACTERS:
        //     return { ...state, characters: action.payload };

        case ADD_CHARACTER:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }

        case REMOVE_CHARACTERS:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (char) => char.id !== action.payload
                ),
                allCharacters: state.allCharacters.filter(
                    (char) => char.id !== action.payload
                ),
                // allCharacters: state.myFavorites.filter(
                //     (char) => char.id !== action.payload
                // ),
            }

        case FILTER:
            const { allCharacters } = state;

            if (action.payload !== "All characters") {

                let myFavoritesAux = allCharacters.filter(char => char.gender === action.payload)

                return {
                    ...state,
                    myFavorites: myFavoritesAux
                }
            }

            return {
                ...state,
                myFavorites: [...allCharacters],
            }




        case ORDER:

            return {
                ...state,
                myFavorites:
                    action.payload === "Descendente" ?
                        state.allCharacters.sort((a, b) => b.id - a.id) :
                        state.allCharacters.sort((a, b) => a.id - b.id)

            }




        default:
            return { ...state }

    }


}
export default rootReducer;