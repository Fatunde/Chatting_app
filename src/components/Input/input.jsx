import React from 'react';
//import Picker from 'emoji-picker-react';
import './input.css'
const Input = ({message, sendMessage, setMessage}) => {
    // const [chosenEmoji, setChosenEmoji] = useState(null);
 
 // const onEmojiClick = (event, emojiObject) => {
//    setChosenEmoji(emojiObject);
//  };
 
      
       
  return(
    <div>
<div className="input-group w-100">
 <Input className="form-control" value={message} onChange={ (event) => setMessage(event.target.value) } onKeyPress={event => event.key === "Enter" ? sendMessage(event) : null} />
<div className="input-group-append">
     
    <button className="btn btn-primary" onClick={sendMessage}>Send</button>
</div>
</div></div>
)
}

export default Input