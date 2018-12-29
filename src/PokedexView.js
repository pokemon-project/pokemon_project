import React from 'react'
import './app.css'

const PokedexView = () => {
    return (
        <div className = 'pokedex-view-container'>
            <div className = "pokedex-view-box">
                <div className = "pokedex-view-container-top-half">
                    <div className = "image-container"></div>
                    <div className = "stats-top-container">
                        <div className = "pokemon-number-display-container">
                            <p className = "pokemon-number-display">No. 1</p>
                        </div>
                        <div className = "pokemon-weight-container">
                            <p className = "pokemon-weight-display">Weight: 1000</p>
                        </div>
                        <div className = "pokemon-type-display">
                            <i className = "type-icon"></i>
                        </div>
                    </div>
                </div>
                <div className = "pokedex-view-container-bottom-half">

                </div>
            </div>
            <div className = "pokemon-name-container">
                <p className = "current-pokemon-name">Charizard</p>
            </div>
            <div className = "pokedex-toggle-container">
                <div className = "stats-container">
                {/* This button will be the first display with picture, type, and weight */}
                    <div className = "left-buttons left-button-front">stats</div>
                    {/* This button will be the pokemon's attacks */}
                    <div className = "left-buttons left-button-back">attacks</div>
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

export default PokedexView