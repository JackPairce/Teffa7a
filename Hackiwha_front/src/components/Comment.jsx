import React from 'react'
import '../index.css'
import upvote from '/upvote_icon.svg'
import downvote from '/downvote_icon.svg'

const Comment = ({message, pfp, sender, badge }) => {
  return (
    <div className='commentElement'>
        <div className='pfpSide'>
            <img src={pfp} alt="" />
        </div>
        <div className='textSide'>
            <div className='usernameText'>
                <p>{sender}</p>
                <img src={badge} alt="" />
            </div>
            <div className='messageText'>
                <p>{message}</p>
            </div>
            <div className='voteSection'>
                <img src={upvote} alt="" />
                <p>-12</p>
                <img src={downvote} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Comment