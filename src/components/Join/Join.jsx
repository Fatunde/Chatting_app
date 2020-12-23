import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Join.css'


const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
 
    return ( 
      <div className="joinOuterContainer">
          <div className="joinInnerContainer">
              <h1 className="header">Join</h1>
              <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value) }/></div>
              <div>
                <select placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} id="exampleFormControlSelect1">
      <option>Joke</option>
      <option>Family</option>
      <option>Relationship</option>
      <option>Kids</option>
      <option>Education</option>
      <option>Politics</option>
    </select></div>
              <Link onClick={event=> (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
              <button className="button mt-20" type="submit">Sign in</button>
              </Link>
          </div>
      </div>
     );
  
}


export default Join;
