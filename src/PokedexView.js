import React, { Component } from 'react'
import './app.css'

class PokedexView extends Component {
    constructor() {
        super()
        this.state = {
            currentView: true
        }
    }

    onClickViewStats = () => {
        this.setState(prevState => ({
            currentView: true
        }))
    }

    onClickViewAttacks = () => {
        this.setState(prevState => ({
            currentView: false
        }))
    }


    render() {
        console.log(this.state)
        const pokePic = this.props.image
        return (
            <div className = 'pokedex-view-container'>
                <div className = "pokedex-view-box">
                    <div className = "pokedex-view-container-top-half">
                        <div className = "image-container">
                            <img className = "poke-image" src = {pokePic} alt = {this.props.name} />
                        </div>
                        <div className = "stats-top-container">
                            <div className = "pokemon-number-display-container">
                                <p className = "pokemon-number-display">No. 1</p>
                            </div>
                            <div className = "pokemon-weight-container word-container">
                                <p className = "pokemon-weight-display">Type: {this.props.type}</p>
                            </div>
                            <div className = "pokemon-type-display word-container">
                                <p className = "type-icon">Exp: { this.props.experience }</p>
                            </div>
                        </div>
                    </div>
                    <div className = "pokedex-view-container-bottom-half">
    
                    </div>
                </div>
                <div className = "pokemon-name-container">
                    <p className = "current-pokemon-name">{this.props.name}</p>
                </div>
                <div className = "pokedex-toggle-container">
                    <div className = "stats-container">
                    {/* This button will be the first display with picture, type, and weight */}
                        <div className = "left-buttons left-button-front" onClick = { this.onClickViewStats }>stats</div>
                        {/* This button will be the pokemon's attacks */}
                        <div className = "left-buttons left-button-back" onClick = { this.onClickViewAttacks }>attacks</div>
                    </div>
                    {/* These buttons will allow you to cycle through the pokemon in pokedex order hopefully  */}
                    <div className = "toggle-buttons">
                        <i class="fas fa-caret-left"></i>
                        <i class="fas fa-caret-right"></i>
                    </div>
                </div>
            </div>
        )
    }

}

export default PokedexView