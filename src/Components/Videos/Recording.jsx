import React from 'react';
import styles from './Recording.module.css';
import { useNavigate } from "react-router-dom";
// import { ReactMediaRecorder } from "react-media-recorder";

const Recording = () => {
    const navigate = useNavigate();
    const handleRecording = () => {
        navigate('/introduce')
    }

  return (
    <>
        <div className={`${styles.container} container mt-5 mb-5`}>
        <div className="row h-100">
          <div className="col-md-4" style={{backgroundColor: 'red'}}>        
        </div>
          <div className="col-md-8 p-5 h-100">
          <h3 className='text-center mb-3'>STEP 2: Let's check your device</h3>
            <div className="fs-5 mb-2 ms-3 me-3">On your device, please grant access to your camera and microphone. Run a test recording to ensure you can see and hear yourself clearly.</div>
            <div className={`${styles.line} fs-5 mb-3 ms-3 me-3`}>Don’t worry, this is just a test recording, and won’t be shared with anyone else.</div>
            <div onClick={handleRecording} className={`${styles.recording} mt-3 mb-3 fw-bold`}>STEP 1: Introduce Yourself</div>
          </div>
        </div>
      </div>
      <div>
      </div>
    </>
  )
}

export default Recording
