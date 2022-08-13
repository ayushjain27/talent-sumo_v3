import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ThankYou.module.css';

import ty from '../../assets/Images/thankyou.png';

const ThankYou = () => {

    return (
        <>
            <div className="container">
                <div className="d-grid col-md-8 mx-auto">
                    <div className="card border-warning mt-5">
                        <div className="card-body">
                            <div className={`${styles.row} row`}>
                                <div className="col-md-6 m-auto">
                                    <h1 className='mb-5'>Thank You</h1>
                                    <h5 className='mb-3'>For creating the interaction with test
                                        ID XYZ
                                    </h5>
                                    <h5>
                                        Below is the interaction link created.
                                    </h5>
                                    <Link to="/form" target="_blank">
                                        <button className='btn btn-warning mt-4'>Go To Form</button>
                                    </Link>
                                </div>
                                <div className="col-md-6 m-auto">
                                    <img className='d-flex justify-content-center mx-auto img-fluid' src={ty} alt="Thank You" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThankYou;