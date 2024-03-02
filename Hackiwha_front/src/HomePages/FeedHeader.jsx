import React from 'react'
import HomeStyles from './Home.module.css'

const FeedHeader = () => {

    let isJoined = true;

  return (
    <div className={HomeStyles.feedHeader}>
        <h3>t/MentalIlness</h3>
        
        {isJoined ? (
            <button className={HomeStyles.joinedBtn}>Joined</button>
            ) : (
            <button className={HomeStyles.joinBtn}>Join</button>
        )

      }
      {/* <button className={HomeStyles.addPostBtn}>Add post</button> */}

    </div>
  )
}

export default FeedHeader