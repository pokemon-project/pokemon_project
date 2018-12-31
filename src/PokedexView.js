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
        this.setState({
            currentView: true
        })
    }

    onClickViewAttacks = () => {
        this.setState({
            currentView: false
        })
    }


    render() {
        console.log(this.state)
        const pokePic = this.props.image
        return (
            <div className = 'pokedex-view-container'>
                {
                    this.props.id === undefined ? 
                        <div className = "pokedex-view-box first-box">
                            <div className = "pokeball"></div>
                        </div>
                    :
                        <div className = "pokedex-view-box">
                            <div className = "pokedex-view-container-top-half">
                                <div className = "image-container">
                                    {
                                        this.props.name === undefined ?
                                            <div></div>
                                        :
                                            <img className = "poke-image" src = {pokePic} />
                                    }
                                </div>
                                <div className = "stats-top-container">
                                    <div className = "pokemon-number-display-container">
                                        <p className = "pokemon-number-display">No. { this.props.id }</p>
                                    </div>
                                    <div className = "pokemon-weight-container word-container">
                                        <p className = "pokemon-weight-display">Type: {this.props.type}</p>
                                    </div>
                                    <div>
                                        <p className = "pokemon-weight-container word-container">Weight: { this.props.weight }</p>
                                    </div>
                                    <div className = "pokemon-type-display word-container">
                                        <p className = "type-icon">Base Exp: { this.props.experience }</p>
                                    </div>
                                </div>
                            </div>

                            <div className = "pokedex-view-container-bottom-half">
                            {
                                this.state.currentView === true ?
                                    <div className = "pokemon-description">Description: <br /> { this.props.description }</div>
                                :
                                    <React.Fragment>
                                        <div className = "attack-title">Attacks:</div>
                                        <div className = "pokemon-attacks">{ this.props.moves.map(move => {
                                            return <p className = "individual-pokemon-attack">{`${move}`}</p>
                                        }) }</div>
                                    </React.Fragment>
                            }
                            </div>
                        </div>
                }
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