import React, {Component} from 'react'
import './app.css'

class PokedexControls extends Component {
    constructor() {
        super()
        this.state = {
            currentInput: ''
        }
    }

    onInputChange = (event) => {
        event.preventDefault()
        this.setState({
            currentInput: event.target.value
        })
    }

    // onSubmit = (event) => {
    //     event.preventDefault()
        
    // }

    render() {

        let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        // Mapping through the alphabet and numbers

        let letters = alphabet.map(letter => {
            return <button className = "letter-buttons buttons">{`${letter.toUpperCase()}`}</button>
        })
        
        let numberButtons = numbers.map(number => {
            return <button className = "number-buttons buttons">{`${number}`}</button>
        })
        return (
            <React.Fragment>
                <div className = "hinge-container">
                    <div className = "hinges hinge-1"></div>
                    <div className = "hinges hinge-2"></div>
                </div>
                <div className = "pokedex-controls-container">
                    <div className = "searchbar-container">
                        <input 
                            className = "pokedex-searchbar" 
                            type = "text"
                            onChange = { this.onInputChange }
                            value = { this.state.currentInput }
                            name = { this.state.currentInput }
                        />
                    </div>
                    <div className = "pokedex-key-pad">
                        {letters}
                        <button className = "circle-buttons button-enter" onClick = { () => this.props.getPokemon(this.state.currentInput) }>Enter</button>
                        <button className = "circle-buttons button-delete">Delete</button>
                        <button className = "circle-buttons button-random" onClick = { () => this.props.getRandPokemon() }>Random</button>
                    </div>
                    <div className = "numbers-container">
                        {numberButtons}
                    </div>
                </div>
            </React.Fragment>
        )
    }


}

export default PokedexControls