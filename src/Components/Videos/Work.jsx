import React from 'react';
import styles from './Work.module.css';
import { useNavigate } from "react-router-dom";
 
const Work = () => {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate('/introduce')
    }
    const handleWelcome = () => {
        navigate('/welcome')
    }
  return (
    <>
        <div className={`${styles.container} container mt-5 mb-5`}>
        <div className="row h-100">
          <div className="col-md-4" style={{backgroundColor: 'red'}}></div>
          <div className="col-md-8 p-5 h-100">
            <h3 className='ms-3 me-3'>How it works?</h3>
            <div className="fs-5 mb-2 ms-3 me-3">It’s really easy. Questions have been prepared for you in advance, and you are simply required to record your answers to them using the camera and microphone of your computer, tablet, or phone.</div>
            <div className="fs-5 mb-3 ms-3 me-3">Don’t worry if something goes wrong during the recording, these things happen. The good news is you can always completely start afresh using the original link provided, but please bear in mind, that Cognizant will receive all of the recordings you submit.</div>
            <button onClick={handleNext} type="button" className="btn btn-success w-100 mt-3 fw-bold rounded-pill ms-3 me-3">Next</button>
            <div onClick={handleWelcome} className={`${styles.welcome} mt-3 mb-3 fw-bold`}>Welcome</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
