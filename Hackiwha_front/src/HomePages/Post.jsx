import React, { useState } from 'react'

import HomeStyles from './Home.module.css'
import downvoteIcon from '/downvote_icon.svg'
import upvoteIcon from '/upvote_icon.svg'
import commentIcon from '/comment_ic_icon.svg'




const Post = ({title, content, user, submedicPFP, nbVotes, nbComments,setIsCommenting}) => {

    function handleUpvote() {

    }

    const [color, setColor] = useState('var(--fullWhite)')

  return (
    <div className={HomeStyles.postElement}>
        <div className={HomeStyles.postHeader}>
            <img src={submedicPFP} alt="" />
            <div className={HomeStyles.postHeaderText}>
                <h3>{title}</h3>
                <p>{user}</p>
            </div>
        </div>

        <div className={HomeStyles.postCore}>
            <p>{content}</p>
        </div>

        <div className={HomeStyles.postFooter}>
            <div className={HomeStyles.postFooterElement} > 
                <img src={upvoteIcon} alt="" onClick={handleUpvote} />
                <p>{nbVotes}</p>
                <img src={downvoteIcon} alt="" />
            </div>
            <div className={HomeStyles.postFooterElement} onClick={() => setIsCommenting(true)}>
                <img className={HomeStyles.commentIconFix} src={commentIcon} alt="" />
                <p>{nbComments}</p>
            </div>
        </div>

    </div>
  )
}

export default Post