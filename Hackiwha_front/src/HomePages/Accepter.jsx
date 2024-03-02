import React from 'react'
import HomeStyles from './Home.module.css'
import dlIcon from '/dl2.svg'


const Accepter = () => {
  return (
    <div className={HomeStyles.AccepterPage}>
        <div className={HomeStyles.docContainer}>
            <div className={HomeStyles.docElement}>
                <img className={HomeStyles.pfpFirst} src="" alt="" />
                <p>username user</p>
                <button className={HomeStyles.dlBtn}><img src={dlIcon} alt="" /></button>
                <button className={HomeStyles.yesBtn}>YES</button>
                <button className={HomeStyles.noBtn}>NO</button>
            </div>
            <div className={HomeStyles.docElement}>
                <img className={HomeStyles.pfpFirst} src="" alt="" />
                <p>username user</p>
                <button className={HomeStyles.dlBtn}><img src={dlIcon} alt="" /></button>
                <button className={HomeStyles.yesBtn}>YES</button>
                <button className={HomeStyles.noBtn}>NO</button>
            </div>
            <div className={HomeStyles.docElement}>
                <img className={HomeStyles.pfpFirst} src="" alt="" />
                <p>username user</p>
                <button className={HomeStyles.dlBtn}><img src={dlIcon} alt="" /></button>
                <button className={HomeStyles.yesBtn}>YES</button>
                <button className={HomeStyles.noBtn}>NO</button>
            </div>
            <div className={HomeStyles.docElement}>
                <img className={HomeStyles.pfpFirst} src="" alt="" />
                <p>username user</p>
                <button className={HomeStyles.dlBtn}><img src={dlIcon} alt="" /></button>
                <button className={HomeStyles.yesBtn}>YES</button>
                <button className={HomeStyles.noBtn}>NO</button>
            </div>
            
        </div>
    </div>
  )
}

export default Accepter