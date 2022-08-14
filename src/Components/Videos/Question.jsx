import React from 'react';
import styles from './Question.module.css';
import { useNavigate } from "react-router-dom";

const Question = () => {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate('/')
    }
  return (
    <>
     <div className={`${styles.container} container mt-5 mb-5`}>
        <div className="row h-100">
          <div className="col-md-4" style={{backgroundColor: 'red'}}></div>
          <div className="col-md-8">
            <h4 className='m-5'>How you are doing ?</h4>
            <hr className='mb-5 me-5 ms-5'/>
            <button onClick={handleNext} type="button" className="btn btn-success w-75 m-auto text-center mb-5 d-flex justify-content-center fw-bold rounded-pill">Next Question</button>
          </div>
          </div>
      </div>
    </>
  )
}

export default Question
