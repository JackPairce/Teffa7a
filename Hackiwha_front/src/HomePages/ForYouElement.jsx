import React from 'react'
import HomeStyles from './Home.module.css'
import pfp1 from '/pfp1.png'
import pfp2 from '/pfp2.png'
import pfp3 from '/pfp3.png'

function getRandomPfp() {
  const pfps = [pfp1, pfp2, pfp3]
  return pfps[parseInt(Math.random() * pfps.length)];
}

const ForYouElement = ({medic}) => {
  const {name,membersNumber} = medic
  return (
    <div className={HomeStyles.forYouElement}>
        <img src={getRandomPfp()} alt="" />
        <div className={HomeStyles.forYouElementText}>
            <h3>{name}</h3>
            <p>{membersNumber} followers</p>
        </div>
    </div>
  )
}

export default ForYouElement