import React, {Component} from 'react'
import './app.css'

class PokedexControls extends Component {
    constructor() {
        super()
        this.state = {
            currentInput: ''
        }
    }

    onRandAndEnterClick = (pokemon) => {
        this.props.getPokemon(pokemon)
        this.setState({
            currentInput: ''
        })
    }

    onAlphabetButtonClick = (letter) => {
        this.setState(prevState => ({
            currentInput: prevState.currentInput + letter
        }))
    }

    onNumberButtonClick = (number) => {
        this.setState(prevState => ({
            currentInput: prevState.currentInput + number
        }))
    } 

    onInputChange = (event) => {
        event.preventDefault()
        this.setState({
            currentInput: event.target.value
        })
    }

    onDeleteClick = () => {
        let deletedStr = this.state.currentInput.split('')
        deletedStr.pop()
        let returnedStr = deletedStr.join('')
        console.log(returnedStr)
        this.setState(prevState => ({
            currentInput: console.log(prevState)
        }))
    }

    // onSubmit = (event) => {
    //     event.preventDefault()
        
    // }

    render() {
        console.log(this.state)
        let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
        let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        // Mapping through the alphabet and numbers

        let letters = alphabet.map((letter, i) => {
            return <button key = {i} 
                           className = "letter-buttons buttons"
                           onClick = { () => this.onAlphabetButtonClick(letter) }>{`${letter.toUpperCase()}`}</button>
        })
        
        let numberButtons = numbers.map((number, i) => {
            number.toString()
            return <button key = {i} 
                           className = "number-buttons buttons"
                           onClick = { () => this.onNumberButtonClick(number) }>{`${number}`}</button>
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
                        <button className = "circle-buttons button-enter" onClick = { () => this.onRandAndEnterClick(this.state.currentInput)}>Enter</button>
                        <button className = "circle-buttons button-delete" onClick = { () => this.onDeleteClick() }>Delete</button>
                        <button className = "circle-buttons button-random" onClick = { () => this.onRandAndEnterClick('random') }>Random</button>
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