import React, { useEffect, useState } from 'react';
import styles from './AudioRecording.module.css';
import { useNavigate } from "react-router-dom";
import { useReactMediaRecorder } from "react-media-recorder";

const AudioRecording = () => {
    const navigate = useNavigate();
    const handleRecording = () => {
        navigate('/recording')
    }
    const handleCompleted = () => {
      navigate('/start')
  }
  const handleClickStart = () => {
    if (!isActive) {
        startRecording();
      } else {
        pauseRecording();
      }

      setIsActive(!isActive);
    }

  const handleClickStop = () => {
    pauseRecording();
    stopRecording();
    setIsActive(!isActive);
    }


  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 650);
    }

    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  function stopTimer() {
    setIsActive(false);
    setCounter(0);
    setSecond("00");
    setMinute("00");
  }

  const {
    startRecording,
    stopRecording,
    pauseRecording,
    mediaBlobUrl
  } = useReactMediaRecorder({
    video: false,
    audio: true,
    echoCancellation: true
  });
  console.log("deed", mediaBlobUrl);

//   const convertFileToBase64 = (file) =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.readAsDataURL(file.mediaBlobUrl);

//       reader.onload = () =>
//         resolve({
//           fileName: file.title,
//           base64: reader.result
//         });
//       reader.onerror = reject;
//     });

    
  return (
    <>
        <div className={`${styles.container} container mt-5 mb-5`}>
        <div className="row h-100">
          <div className="col-md-4 bg-dark">        
          <div className="d-flex flex-column" style={{ border: "1px solid black", backgroundColor: "black", width: "100%", height: "100%" }}>
      <div className='d-flex justify-content-center'><video src={mediaBlobUrl} controls loop /></div>
      <div className="col-md-6 col-md-offset-3 w-100"
        style={{ backgroundColor: "black", color: "white"}}>
        <button type="button" className='d-flex justify-content-center btn btn-outline-danger mt-3 ms-3' onClick={stopTimer}>Retake</button>
        <div className='d-flex justify-content-center fs-1'>
          <span className="minute">{minute}</span>
          <span>:</span>
          <span className="second">{second}</span>
        </div>
        <div className='d-flex ms-3'>
          <label className='fw-normal fs-2' htmlFor="icon-button-file">
            <h3 className='ms-3 fw-normal'>Press the Start to record</h3>
            <div className='d-flex justify-content-around'>
              <button className={`${styles.audiostart} border-none fs-5 fw-bold`} onClick={ handleClickStart }>{isActive ? "Pause" : "Start"}</button>
              <button className={`${styles.audiostop} border-none fs-5 fw-bold`}
                onClick={ handleClickStop }>Stop</button>
            </div>
          </label>
        </div>
      </div>
    </div>
        </div>
          <div className="col-md-8 p-5 h-100">
          <h3 className='text-center mb-3'>STEP 2: Let's check your device</h3>
            <div className="fs-5 mb-2 ms-3 me-3">On your device, please grant access to your camera and microphone. Run a test recording to ensure you can see and hear yourself clearly.</div>
            <div className={`${styles.line} fs-5 mb-3 ms-3 me-3`}>Don’t worry, this is just a test recording, and won’t be shared with anyone else.</div>
            <div onClick={handleRecording} className={`${styles.recording} mt-3 mb-3 fw-bold`}>&#60;-- Video Recording</div>
            <button onClick={handleCompleted} type="button" className="btn btn-success w-100 mt-3 fw-bold rounded-pill ms-3 me-3">Completed</button>
          </div>
        </div>
      </div>
      <div>
      </div>
    </>
  )
}

export default AudioRecording
