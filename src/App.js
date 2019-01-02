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
                        description = { this.props.pokemon.Description }
                        moves = { this.props.pokemon.Moves }
                        experience = { this.props.pokemon.XP }
                        weight = { this.props.pokemon.Weight }
                        id = { this.props.pokemon.ID }
                        key = { this.props.pokemon.ID }
                    />
                    <PokedexControls 
                        getPokemon = { this.getPokemon } 
                        getRandPokemon = { this.getRandomPokemon }
                        id = { this.props.pokemon.ID }
                    />
                </div>
            </React.Fragment>
        )
    }
}

export default connect(state => state, { getPokemon })(App)

