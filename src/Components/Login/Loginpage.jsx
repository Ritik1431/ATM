import React from 'react'
import bankimage from './../../assets/bank.png'
import './Loginpage.scss'
import Lottie from 'lottie-react';
import animationData from './../../assets/needhelp.json'; 
import { Link } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';


const Loginpage = () => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//   };
  return (
    <div className='container'>
      <div className="outer">
        <div className="image">
          <img src={bankimage} alt="" />

        </div>
        <div className='register'>
          <div className="signup">
          <h2>New User</h2>
          <button>Signup</button>
          </div>
          <div className="login">
            <h2>Already have an account</h2>
            <Link to="/homepage"><button>Login </button></Link>
          </div>

        </div>
      </div>
      <div className="contact">
        <div className="left">
          <h2>Need Help?</h2>
          <h5>24/7 Available </h5>
        </div>
        <div className="lower">
          {/* <Lottie options={defaultOptions} height={50} width={50} /> */}
          <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            style={{ width: 50, height: 50 }}
          />
        </div>
      </div>

      <footer>*Note : Only use login for now.</footer>
    </div>
  )
}

export default Loginpage
