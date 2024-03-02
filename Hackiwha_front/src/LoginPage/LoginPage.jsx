import React from 'react'
import loginStyle from './Login.module.css';
import teffa7a_svg from  '/teffaa_logo_light.svg';
import Title_logo from '../components/Title_logo';

const LoginPage = () => {


  return (
    <div className={loginStyle.loginBody}>
      <div className={loginStyle.redPart}>
        <img className={loginStyle.bgTeffa7} src={teffa7a_svg}/>
        <img className={loginStyle.bgTeffa7_top} src={teffa7a_svg}/>
        <div className={loginStyle.redPartContent}>
          <p>Doctors are the guardians of our well-being, guiding us toward health and healing. Their dedication is a beacon of hope in challenging times.</p>
          <p></p>
          <p>one teffa7a a day keeps the doctor away</p>
          {/* <h3>{hackiwhaString}</h3> */}
          <h3>&#123;Hackiwha&#125;</h3>
        </div>
      </div>


      <div className={loginStyle.loginPart}>
        <Title_logo Size={'big'} />
        <form action="">
          <div className={loginStyle.loginElement}>
            <p>Username</p>
            <input type="text" />
          </div>
          <div className={loginStyle.loginElement}>
            <p>Password</p>
            <input type="password" />
          </div>
          <div className={loginStyle.loginElement}>
            <button>Login</button>
          </div>
          <div className={loginStyle.loginElement}>
            <h4>register now</h4>
          </div>
          
        </form>
      </div>


      <div className={loginStyle.greenPart}>

      </div>

    </div>
  )
}

export default LoginPage