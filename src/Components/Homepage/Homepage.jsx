import {React , useEffect , useState} from 'react'
import './Homepage.scss'
import logo from './../../assets/bank.png'
import Lottie from 'react-lottie';
import animationData from './../../assets/debit.json';
import animationData1 from './../../assets/load.json'
import { Link } from 'react-router-dom';

const Homepage = () => {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowDiv(true);
    }, 3000); 

    // Cleanup to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []); 

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
  };
  return (
    <div>
      <div className="container1">
        <div className="top">
          <img src={logo} alt="" />
          <p>Welcome Guest,</p>
        </div>
        <div className="center">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <div className="bottom">
          <h2>
            Please Insert Your Card!
          </h2>
          <Lottie options={defaultOptions1} height={60} width={60} />
          <div className='next'>
            {showDiv && (
              <div>
                <Link to="/pin"><button>Next</button></Link> 
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
