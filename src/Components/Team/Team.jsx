import React, { useState } from "react";

const Team = () => {
    const [noOfRows, setNoOfRows] = useState(1);
    const [invite, setInvite] = useState(false);

    const handleInvite = () => {
        setInvite(!invite);
    };
    const style = {
        height: "100px",
        width: "100%",
        overflow: "auto",
    };

    return (
        <>
            <style>
                {`
                    .button {
                        border-radius : 0;
                    }
                `}
            </style>
            <div className="container d-flex justify-content-between mt-5">
                <h3>Team Member Status</h3>
                <button onClick={handleInvite} className="btn btn-warning">
                    Invite User
                </button>
            </div>

            {invite && (
                <div className="container">
                    <div className="d-grid col-md-5 ms-auto">
                        <div className="card border-0 mt-3">
                            <div className="card-body" style={style}>
                                {[...Array(noOfRows)].map(() => {
                                    return (
                                        <input
                                            type="email"
                                            className="form-control mb-2"
                                            id="email"
                                            placeholder="Enter email"
                                            aria-describedby="emailHelp"
                                        />
                                    );
                                })}
                            </div>
                            <div className="card-body">
                                <div className="mt-3 d-flex justify-content-between">
                                    <div className="d-flex gap-2">

                                        <button
                                            type="submit"
                                            className="btn btn-success button"
                                            onClick={() => setNoOfRows(noOfRows + 1)}
                                        >
                                            Add
                                        </button>
                                        <button
                                            disabled={noOfRows <= 1}
                                            type="submit"
                                            className="btn btn-danger button"
                                            onClick={() => setNoOfRows(noOfRows - 1)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                    <div>
                                        <button className="btn btn-primary button">
                                            Generate Link
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="container mt-4">
                <table className="table table-bordered">
                    <thead className="bg-warning border-warning">
                        <tr>
                            <th scope="col">S. No</th>
                            <th scope="col">Invitation Sent</th>
                            <th scope="col">Status</th>
                            <th scope="col">View Only</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td className="text-warning">Pending</td>
                            <td className="d-flex gap-3 flex-wrap">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="yes"
                                    />
                                    <label className="form-check-label" htmlFor="yes">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="no"
                                        checked
                                    />
                                    <label className="form-check-label" htmlFor="no">
                                        No
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td className="text-success">Approved</td>
                            <td className="d-flex gap-3 flex-wrap">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault1"
                                        id="yes1"
                                    />
                                    <label className="form-check-label" htmlFor="yes1">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault1"
                                        id="no1"
                                        checked
                                    />
                                    <label className="form-check-label" htmlFor="no1">
                                        No
                                    </label>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Stella</td>
                            <td className="text-danger">Rejected</td>
                            <td className="d-flex gap-3 flex-wrap">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault2"
                                        id="yes2"
                                    />
                                    <label className="form-check-label" htmlFor="yes2">
                                        Yes
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault2"
                                        id="no2"
                                        checked
                                    />
                                    <label className="form-check-label" htmlFor="no2">
                                        No
                                    </label>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Team;
