import { React, useState, useEffect } from 'react'
import logo from './../../assets/bank.png'
import './Pin.scss'
import Lottie from 'react-lottie';
import animationData from './../../assets/debit.json';
import animationData2 from './../../assets/pin.json';
import { useNavigate } from "react-router-dom";

const Pin = () => {
    const [enteredPin, setEnteredPin] = useState('');
    const [shouldMove, setShouldMove] = useState(false);
    const [showDiv, setShowDiv] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowDiv(true);
        }, 4000);

        // Cleanup to prevent memory leaks
        return () => clearTimeout(timeoutId);
    }, []);

    const correctPin = '1234'; // Replace with your correct PIN
    useEffect(() => {
        // After 2 seconds, trigger the movement by setting shouldMove to true
        const timeoutId = setTimeout(() => {
            setShouldMove(true);

        }, 2000);

        // Cleanup to prevent memory leaks
        return () => clearTimeout(timeoutId);
    }, []);

    const handlePinChange = (e) => {
        // Ensure only numeric input and limit the length to 4 digits
        const newPin = e.target.value.replace(/\D/g, '').slice(0, 4);
        setEnteredPin(newPin);
    };

    const handleSubmit = () => {
        if (enteredPin === correctPin) {
            alert('PIN is correct!');
            navigate("/withdrawl", { state: { Data: "Welcome Ritik" } })
            // You can replace this with your desired action
        } else {
            alert('Incorrect PIN. Please try again.');
            setEnteredPin('');
        }
    };
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
    };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animationData2,
    };
    return (
        <div className="container2">
            <div className="top">
                <img src={logo} alt="" />
                <p>Welcome Guest,</p>
            </div>
            <div className="center">
                <div className="left">
                    <div className={`move-div ${shouldMove ? 'move-left' : ''}`} >
                        <Lottie options={defaultOptions} height={400} width={400} />
                    </div>
                </div>
                {showDiv && (
                    <div className="right">
                        <div className="pin">
                            <h2>Enter Four-Digit PIN</h2>
                            <input
                                type="password"
                                value={enteredPin}
                                onChange={handlePinChange}
                                maxLength="4"
                                placeholder="****"
                            />
                            <br />
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                        <div className="animation">
                            <Lottie options={defaultOptions2} height={150} width={150} />
                        </div>
                    </div>
                )}
            </div>
            <footer>*Note : default pin is 1234.</footer>
        </div>
    )
}

export default Pin
