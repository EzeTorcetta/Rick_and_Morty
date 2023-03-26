// export const GET_ALL_CHARACTERS = "GET_ALL_CHARACTERS";
export const ADD_CHARACTER = "ADD_CHARACTER";
export const REMOVE_CHARACTERS = "REMOVE_CHARACTERS";
export const FILTER = "FILTER";
export const ORDER = "ORDER";

// const URL_BASE = "https://be-a-rym.up.railway.app/api";
// const KEY = "416486ca5103.96ef6b2df4eb1059f55c";

// export const getAllCharacters = () => {
//     return function (dispatch) {
//         fetch(`${URL_BASE}/character?key=${KEY}`)
//         .then ((response) => response.json())
//         .then ((data) => dispatch({type: GET_ALL_CHARACTERS, payload: data}))
//     }
// }

export const removeCharacter = (id) => { // El id es el dato que recibe por dispatch
    return {type: REMOVE_CHARACTERS, payload: id}
}

export const addCharacter = (character) => {
    return {type: ADD_CHARACTER, payload:character}
}

export const filterCards = (gender) => {
    return {type: FILTER, payload: gender}
}

export const orderCards = (id) => {
  return {type: ORDER, payload: id}
}

