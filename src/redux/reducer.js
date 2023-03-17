import { ADD_CHARACTER, FILTER, REMOVE_CHARACTERS, ORDER} from "./actions"

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
                )
            }

        case FILTER:
            const {allCharacters} = state;
            return {
                ...state,
              myFavorites: allCharacters.filter(char => char.gender === action.payload),
            }
        
        case ORDER:
            
                return {
                    ...state,
                    myFavorites:
                    action.payload === "Ascendente"?
                    allCharacters.sort((a,b) => a.id < b.id):
                    allCharacters.sort((a,b) => a.id > b.id)
                                       
                }
              
            
      
        
        default:
          return { ...state }

    }


}
export default rootReducer;