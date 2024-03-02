import React from 'react'
import '../index.css'

const Title_logo = ({Size, kayenBy, kayenKtiba, isWhite}) => {

    // size 1 2 3
    let logoCompClass = ''
    let logoCompSvg = ''

    if (Size == "small") {
        logoCompClass = 'logoCompSmall'
        logoCompSvg = 'logoCompSvgSmall'
    } else if (Size == "medium") {
        logoCompClass = 'logoCompMedium'
        logoCompSvg = 'logoCompSvgMedium'
    } else if (Size == "big") {
        logoCompClass = 'logoCompBig'
        logoCompSvg = 'logoCompSvgBig'
    }

    console.log(logoCompSvg)
    console.log(Size)


  return (
    <div className={logoCompClass}>
        <img src="/teffa7a_logo.svg" className={logoCompSvg}/>
        <div className="logoTextSection">
            <h2>Submedics</h2>
            <p>by teffa77a team</p>
        </div>
    </div>
  )
}

export default Title_logo