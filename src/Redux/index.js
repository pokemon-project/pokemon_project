import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'

const initState = {
    pokemon: []
}

export const getPokemon = (pokemon) => {
    return dispatch => {
        axios.get(`/get/${pokemon}`)
        .then(response => {
            dispatch({
                type: "GET_POKEMON",
                pokemon: response.data
            })
        })
    }
}

const reducer = (prevState = initState, action) => {
    switch(action.type) {
        case "GET_POKEMON":
            return {
                pokemon: action.pokemon
            }
        default: return prevState
    }
}

export default createStore(reducer, applyMiddleware(thunk))