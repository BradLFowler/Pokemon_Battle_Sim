export const setLoggedIn = (loggedIn) => {
    return {
        type: "SET_LOGGEDIN",
        value: loggedIn
    }
}

export const fetchPokemon = () => {
    return (dispatch) => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => response.json())
        .then((res) => {
            const action = {
                type: "FETCH_POKEMON",
                value: res.results
            }
            dispatch(action)
        })
    }
}

export const setPoke1 = (poke1) => {
    return {
        type: "SET_POKE1",
        value: poke1
    }
}

export const setPoke2 = (poke2) => {
    return {
        type: "SET_POKE2",
        value: poke2
    }
}

export const setMoves1 = (moves1) => {
    return {
        type: "SET_MOVES1",
        value: moves1
    }
}

export const setMoves2 = (moves2) => {
    return {
        type: "SET_MOVES2",
        value: moves2
    }
}