import React from "react";

function JobApp({ companyName, jobID, jobApps, setJobApps }) {
  const deleteHandler = () => {
    setJobApps(jobApps.filter((x) => x.id !== jobID));
  };
  return (
    <div className="jobApp">
      <li className="jobApp-item">{companyName}</li>
      <button onClick={deleteHandler}>X</button>
    </div>
  );
}

export default JobApp;
