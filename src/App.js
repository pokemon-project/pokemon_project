import React, { Component } from 'react'
import './app.css'
import PokedexView from './PokedexView'
import PokedexControls from './PokedexControls'
import {connect} from 'react-redux'
import { getPokemon } from './Redux'
const rand = 'random'
class App extends Component {
    getPokemon = (pokemon) => {
        this.props.getPokemon(pokemon)
    }

    getRandomPokemon = () => {
        this.props.getPokemon(rand)
    }

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <React.Fragment>
                <div className = "bg-wrapper"></div>
                <div className = "pokedex-container">
                    <PokedexView
                        image = { this.props.pokemon.Picture }
                        name = { this.props.pokemon.Name }
                        type = { this.props.pokemon.Type }
                        description = { this.props.pokemon.description }
                        moves = { this.props.pokemon.moves }
                        experience = { this.props.pokemon.XP }
                    />
                    <PokedexControls getPokemon = { this.getPokemon } getRandPokemon = { this.getRandomPokemon } />
                </div>
            </React.Fragment>
        )
    }
}

export default connect(state => state, { getPokemon })(App)

