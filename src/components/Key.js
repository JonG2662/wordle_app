const Key = (props) => {
return(
        <div className="keyboardButton"
            onClick={() => {
                props.onPressedKey(props.text)
             }}>
            {props.text}
        </div>
    )
}

export default Key