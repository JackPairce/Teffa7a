import React, { useEffect, useState } from 'react'
import '../index.css'
import Comment from './Comment.jsx'


const Popup = ({ title , setIsCommenting}) => {

  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')



  function handleSendMessage() {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('')
    }
  }

  
  return (
    <div className='popup' /* add on click to delete */>
      <div className='popupBody'>
        <div className='popupHeader'>
          <h3>{title}</h3>
          <p onClick={() => setIsCommenting(false)}>x</p>
        </div>
        <br></br>
        <br></br>

        <div className="allComments">
          {messages.map((message) => (
            <Comment key={message._id ? message._id: message} message={message} pfp='' sender='usernameuser' badge='' />
          ))}
        </div>
        
        

        <div className="popupInput">
          <input type="text" value={newMessage} onChange={(e) => setNewMessage(e.target.value)}/>
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Popup