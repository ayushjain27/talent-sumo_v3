import React from "react";
import styles from './Welcome.module.css';
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate('/work')
    }
  return (
    <>
      <div className={`${styles.container} container mt-5 mb-5`}>
        <div className="row h-100">
          <div className="col-md-4" style={{backgroundColor: 'red'}}></div>
          <div className="col-md-8 p-5">
            <h3 className="ms-3 me-3">Welcome!</h3>
            <div className="fs-5 mb-2 ms-3 me-3">Cognizant has invited you to submit a video interview for the following job opening:</div>
            <h3 className="mb-2 ms-3 me-3">SDE</h3>
            <div className="fs-5 ms-3 me-3">This service is designed to record your video interview at a time and place convenient to you.</div>
            <button onClick={handleNext} type="button" className="btn btn-success w-100 mt-3 fw-bold rounded-pill ms-3 me-3">Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
