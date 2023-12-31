import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from './../../assets/bank.png';
import './Withdrawl.scss';
import Lottie from 'lottie-react';
import animationData from './../../assets/cash.json';
import { FcMoneyTransfer } from 'react-icons/fc';
import { FaUserAlt } from 'react-icons/fa';

const Withdrawl = () => {
  const [amount, setAmount] = useState('');
  const [showDiv, setShowDiv] = useState(true);
  const navigate = useNavigate();

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const CancelButton = () => {
    navigate('/');
  };

  const handleConfirm = () => {
    const parsedAmount = parseFloat(amount);

    if (parsedAmount <= 0 || isNaN(parsedAmount)) {
      alert('Amount must be a positive number');
      setAmount(''); // Reset the input field
    } else {
      // Handle the confirmation logic here
      alert(
        `Transaction Done of amount: ${amount} \n Please collect your cash. \n **Thank you for visiting National Bank**`
      );
    }
  };

  const location = useLocation();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };

  const handleCurrent = () => {
    alert("You can't use Current because you have a saving account.");
  };

  const handleSaving = () => {
    setShowDiv(false);
  };

  return (
    <div className="container3">
      <div className="top">
        <img src={logo} alt="" />
        <div className="user">
          {location.state.Data}
          <FaUserAlt />,
        </div>
      </div>
      <div className="heading">
        <h2>Withdrawl</h2>
        <FcMoneyTransfer />
      </div>
      <div className="annimation">
        <Lottie animationData={animationData} loop={true} play={true} style={{ height: 250, width: 550 }} />
      </div>

      {showDiv ? (
        <div className="middle">
          <div className="left">
            <button onClick={handleCurrent}>Current</button>
          </div>
          <div className="right">
            <button onClick={handleSaving}>Savings</button>
          </div>
        </div>
      ) : (
        <div className="inputs">
          <h2>Enter the amount</h2>
          <label>
            <input type="number" value={amount} onChange={handleAmountChange} placeholder="Enter Here" />
          </label>
          <div className="buttons">
            <button onClick={CancelButton}>Cancel</button>
            <button onClick={handleConfirm}>Confirm</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Withdrawl;
