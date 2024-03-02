import React from 'react'
import HomeStyles from './Home.module.css'
import pfp1 from '/pfp1.png'
import pfp2 from '/pfp2.png'
import pfp3 from '/pfp3.png'

function getRandomPfp() {
  const pfps = [pfp1, pfp2, pfp3]
  return pfps[parseInt(Math.random() * pfps.length)];
}

const ExploreElement = () => {

  

  return (
    <div className={HomeStyles.exploreElement}>
        <img src={getRandomPfp()} alt="" />
        <p>t/submedicName</p>
        <p>573 members</p>
    </div>
  )
}

export default ExploreElement