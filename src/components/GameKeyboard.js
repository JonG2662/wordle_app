import "../styles/GameKeyboard.css"
import Key from "./Key"

const GameKeyboard = (props) => {
    
    let letters = [
        "q", "w", "e", "r", "t", "y",
        "u", "i", "o", "p", "a", "s",
        "d", "f", "g", "h", "j", "k",
        "l", "z", "x", "c", "v", "b", "n", "m"
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