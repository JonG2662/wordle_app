import "../styles/GameKeyboard.css"
import Key from "./Key"

const GameKeyboard = (props) => {
    
    let letters = [
        "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P",
        "A", "S", "D", "F", "G", "H", "J", "K", "L",
        "Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"
    ]

    let createKeys = () => {
        return letters.map((letter, index) => {
            return <Key key={index} onPressedKey={props.onPressedKey} text={letter} />
        })
    }

    return (
        <div className={'keyboardContainer'}>{createKeys()}</div>
    )
    
}

export default GameKeyboard