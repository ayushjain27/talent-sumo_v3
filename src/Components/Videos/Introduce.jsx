import React from 'react';
import styles from './Introduce.module.css';
import { useNavigate } from "react-router-dom";

const Introduce = () => {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate('/recording')
    }
    const handleWork = () => {
        navigate('/work')
    }
  return (
    <>
        <div className={`${styles.container} container mt-5 mb-5`}>
        <div className="row h-100">
          <div className="col-md-4" style={{backgroundColor: 'red'}}></div>
          <div className="col-md-8 p-5">
            <h3 className='text-center'>STEP 1: Introduce Yourself</h3>
            <div>
            <label htmlFor="detail" className="form-label fw-bold mb-2">Full Name*</label>
            <input type="text" className="form-control mb-2" id="companyName" />
            <label htmlFor="detail" className="form-label fw-bold mb-2">Email*</label>
            <input type="email" className="form-control mb-2" id="companyName" />
            <label htmlFor="detail" className="form-label fw-bold mb-2">Phone Number*</label>
            <input type="number" className="form-control mb-2" id="companyName" />
            </div>
            <button onClick={handleNext} type="button" className="btn btn-success w-100 mt-3 fw-bold rounded-pill ms-3 me-3">Next</button>
            <div onClick={handleWork} className={`${styles.work} mt-3 mb-3 fw-bold`}>&#60;-- How it Works?</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Introduce
