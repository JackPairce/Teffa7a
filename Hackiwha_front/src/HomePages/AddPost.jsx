import React, { useState } from 'react'

import HomeStyles from './Home.module.css'
import pictureIcon from '/picture_icon.svg'
import pfp2 from '/pfp1.png'


const AddPost = ({newTitle, setNewTitle, newText, setNewText, handleSendPost}) => {


  return (
    <div className={HomeStyles.postElement}>
        <div className={HomeStyles.postHeader}>
            <img src={pfp2} alt="" />
            <div className={HomeStyles.postHeaderText}>
                <input type="text" placeholder='Post title' onChange={(e) => setNewTitle(e.target.value)} />
            </div>
        </div>

        <div className={HomeStyles.postCore}>
            <textarea cols="30" rows="5" onChange={(e) => setNewText(e.target.value)}></textarea>
        </div>

        <div className={HomeStyles.postFooterAdd}>
            <div className={HomeStyles.postFooterElement}>
                <img className={HomeStyles.uploadIcon} src={pictureIcon} alt="" />
                <p>Add Picture</p>
            </div>
            <div className={HomeStyles.postFooterElement} onClick={handleSendPost}>
                <p>Submit Post</p>
            </div>
        </div>

    </div>
  )
}

export default AddPost