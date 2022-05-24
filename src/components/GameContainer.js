import GameBoard from "./GameBoard"
import GameKeyboard from "./GameKeyboard"
import {useState} from 'react'

const GameContainer = () => {
    
    const [key, setKey] = useState("")

    let handlePressedKey = (text) => {
        setKey(text)
    }
    
    return (
        <div>
            <GameBoard pressedKey={key}/>
            <GameKeyboard onPressedKey={handlePressedKey}/>
        </div>
    )
}

export default GameContainer