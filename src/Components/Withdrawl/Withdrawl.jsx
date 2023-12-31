import { React, useEffect, useState} from 'react'
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import logo from './../../assets/bank.png'
import './Withdrawl.scss'
import Lottie from 'react-lottie';
import animationData from './../../assets/cash.json'; 
const Withdrawl = () => {
  const location = useLocation();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  const handleCurrent = () => {
    alert("You can't use Current because you have saving account.");
  }
  const handleSaving = () => {
    setShowdiv(false);
  }
  const [showDiv, setShowdiv] = useState(true)
  const navigate = useNavigate()

    return (
      <div className='container3'>
        <div className="top">
          <img src={logo} alt="" />
          <div className="user">{location.state.Data},</div>
        </div>
        <div className="heading">
          <h2>Withdrawl</h2>
        </div>
        <div className="annimation">
          <Lottie options={defaultOptions} height={250} width={550} />
        </div>
      
        {showDiv ? (
          <div className="middle">
            <div className='left'>
              <button onClick={handleCurrent}>Current</button>
            </div>
            <div className='right'>
              <button onClick={handleSaving}>Savings</button>
            </div>
          </div>
        ) : 
          <div className="inputs">
            <h2>Enter the amount</h2>
            <input type="number"
             />
            <div className="buttons">
              <button>Cancel</button>
              <button >Confirm</button>
            </div>
        </div>
        } 
      </div>
    )
  }
 export default Withdrawl
