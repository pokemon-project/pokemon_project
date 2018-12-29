import React, { Component } from 'react'
import './app.css'
import PokedexView from './PokedexView'
import PokedexControls from './PokedexControls'
class App extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <React.Fragment>
                <div className = "bg-wrapper"></div>
                <div className = "pokedex-container">
                    <PokedexView />
                    <PokedexControls />
                </div>
            </React.Fragment>
        )
    }
}

export default App

