import React, { useRef, useEffect } from 'react';
import styles from './Recording.module.css';
import { useNavigate } from "react-router-dom";
import { ReactMediaRecorder } from "react-media-recorder";

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);
  if (!stream) {
    return null;
  }
  return <video ref={videoRef} className="w-100" height={300} autoPlay />;
};

const Recording = () => {
    const navigate = useNavigate();
    const handleRecording = () => {
        navigate('/introduce')
    }
    const handleCompleted = () => {
      navigate('/start')
  }
    
  return (
    <>
        <div className={`${styles.container} container mt-5 mb-5`}>
        <div className="row h-100">
          <div className="col-md-4 bg-dark">        
          <ReactMediaRecorder
      video={{
        aspectRatio: 0.75
      }}
      render={({ previewStream, status, startRecording, stopRecording, mediaBlobUrl }) => (
        <div className='d-flex justify-content-center align-items-center flex-column'>
          {status !== "stopped" ? (
            <VideoPreview stream={previewStream} />
            ) : (
              <video className='w-100' src={mediaBlobUrl} autoplay loop height={300} controls/>
              )}
              <div className='d-flex justify-content-around align-items-center mt-3'>
              <button type="button" onClick={startRecording} className="btn btn-outline-success">Start Recording</button>
              <button type="button" onClick={stopRecording} className="btn btn-outline-success ms-2">Stop Recording</button>
              </div>
        </div>
      )}
    />
        </div>
          <div className="col-md-8 p-5 h-100">
          <h3 className='text-center mb-3'>STEP 2: Let's check your device</h3>
            <div className="fs-5 mb-2 ms-3 me-3">On your device, please grant access to your camera and microphone. Run a test recording to ensure you can see and hear yourself clearly.</div>
            <div className={`${styles.line} fs-5 mb-3 ms-3 me-3`}>Don’t worry, this is just a test recording, and won’t be shared with anyone else.</div>
            <div onClick={handleRecording} className={`${styles.recording} mt-3 mb-3 fw-bold`}>&#60;-- STEP 1: Introduce Yourself</div>
            <button onClick={handleCompleted} type="button" className="btn btn-success w-100 mt-3 fw-bold rounded-pill ms-3 me-3">Completed</button>
          </div>
        </div>
      </div>
      <div>
      </div>
    </>
  )
}

export default Recording