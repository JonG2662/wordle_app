const Key = (props) => {
return(
        <div className="keyboardButton"
                onClick={() => {
                alert(props.text)
        }}>
            {props.text}
        </div>
    )
}

export default Key