import { combineReducers } from "redux";

const loggedIn = (state = false, action) => {
    switch(action.type) {
        case "SET_LOGGEDIN":
            return action.value
        default:
            return state
    }
}

const pokemon = (state = [], action) => {
    switch(action.type) {
        case "FETCH_POKEMON":
            return action.value
        default:
            return state
    }
};

const poke1 = (state = [], action) => {
    switch(action.type) {
        case "SET_POKE1":
            return action.value
        default:
            return state
    }
}

const poke2 = (state = [], action) => {
    switch(action.type) {
        case "SET_POKE2":
            return action.value
        default:
            return state
    }
}

const moves1 = (state = [], action) => {
    switch(action.type) {
        case "SET_MOVES1":
            return action.value
        default:
            return state
    }
}

const moves2 = (state = [], action) => {
    switch(action.type) {
        case "SET_MOVES2":
            return action.value
        default:
            return state
    }
}

export default combineReducers({ loggedIn, pokemon, poke1, poke2, moves1, moves2 })